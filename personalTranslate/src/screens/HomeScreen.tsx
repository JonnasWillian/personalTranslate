import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style={styles.gradient}
    >
      <StatusBar backgroundColor="transparent" translucent />

      {/* Conteúdo central */}
      <View style={styles.content}>
        {/* Logo ou ícone grande */}
        <View style={styles.iconContainer}>
          <Ionicons name="mic-circle" size={140} color="#00d4ff" />
          <Ionicons name="language" size={80} color="#00d4ff" style={styles.languageIcon} />
        </View>

        {/* Título principal */}
        <Text style={styles.title}>Personal Translate</Text>

        {/* Subtítulo impactante */}
        <Text style={styles.subtitle}>
          Fale em inglês. Ouça em português.{'\n'}
          <Text style={styles.subtitleHighlight}>Offline • Rápido • Inteligente</Text>
        </Text>

        {/* Descrição curta */}
        <Text style={styles.description}>
          Grave sua voz em inglês e ouça a tradução instantânea em português brasileiro.
        </Text>

        {/* Botão principal chamativo */}
        <TouchableOpacity style={styles.startButton} activeOpacity={0.8}>
          <Text style={styles.startButtonText}>Começar a Falar</Text>
          <Ionicons name="mic" size={24} color="#fff" style={{ marginLeft: 10 }} />
        </TouchableOpacity>

        {/* Informações adicionais */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="cloud-off" size={20} color="#00d4ff" />
            <Text style={styles.infoText}>100% Offline</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="flash" size={20} color="#00d4ff" />
            <Text style={styles.infoText}>Instantâneo</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="shield-checkmark" size={20} color="#00d4ff" />
            <Text style={styles.infoText}>Privacidade Total</Text>
          </View>
        </View>
      </View>

      {/* Rodapé discreto */}
      <Text style={styles.footer}>Toque para iniciar • Powered by Expo</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  languageIcon: {
    position: 'absolute',
    bottom: -10,
    right: -10,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 1.2,
    textShadowColor: 'rgba(0, 212, 255, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#e0f7ff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 28,
  },
  subtitleHighlight: {
    color: '#00d4ff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#b0e0ff',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00d4ff',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 40,
    shadowColor: '#00d4ff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f0c29',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#b0e0ff',
    marginTop: 8,
  },
  footer: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
});