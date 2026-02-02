import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { startSTT, stopSTT, useTranscription } from '../services/STTService'; // ajuste o path
import { translate } from '../services/TranslationService'; // ajuste o path

export default function HomeScreen() {
  const [transcribed, setTranscribed] = useState<string>('');
  const [translated, setTranslated] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const { text, isFinal, error, isRecording } = useTranscription(); // Hook principal para resultados reais

  useEffect(() => {
    setTranscribed(text || '');
    if (isFinal && text?.trim()) {
      // Traduz automaticamente ao finalizar frase
      translate(text.trim(), 'en', 'pt-BR').then(setTranslated);
    }
  }, [text, isFinal]);

  useEffect(() => {
    if (error) {
      Alert.alert('Erro no reconhecimento', error || 'Erro desconhecido');
    }
  }, [error]);

  const handleStartStop = async () => {
    if (isRecording) {
      // Parar
      setIsProcessing(true);
      await stopSTT();
      setIsProcessing(false);
    } else {
      // Iniciar
      setIsProcessing(true);
      setTranscribed('');
      setTranslated('');
      try {
        await startSTT(); // Sem params extras
      } catch (err) {
        Alert.alert('Erro', 'Falha ao iniciar gravação/STT.');
      }
      setIsProcessing(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transcreva Inglês → Português</Text>

      <View style={styles.display}>
        <Text style={styles.label}>O que foi dito (inglês):</Text>
        <Text style={styles.text}>{transcribed || '...'}</Text>

        <Text style={styles.label}>Traduzido (português):</Text>
        <Text style={styles.text}>{translated || '...'}</Text>
      </View>

      {isProcessing ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <>
          <Button
            title={isRecording ? "Gravando... (toque para parar)" : "Iniciar Gravação"}
            onPress={handleStartStop}
            color={isRecording ? "#FF3B30" : "#007AFF"}
          />

          {translated ? (
            <View style={{ marginTop: 20 }}>
              <Button
                title="Ouvir novamente"
                onPress={() => Speech.speak(translated, { language: 'pt-BR' })}
              />
            </View>
          ) : null}
        </>
      )}

      <Text style={styles.note}>
        Nota: Funciona melhor offline após baixar modelos (Android: Configurações - Sistema - Idiomas - Reconhecimento offline). Use development build para testar (não Expo Go).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  display: { marginBottom: 40, minHeight: 180 },
  label: { fontSize: 16, color: '#666', marginTop: 16 },
  text: { fontSize: 18, marginTop: 8, padding: 12, backgroundColor: '#f0f0f0', borderRadius: 8 },
  note: { marginTop: 40, fontSize: 12, color: '#888', textAlign: 'center' },
});