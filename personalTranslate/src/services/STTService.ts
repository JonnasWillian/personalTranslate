// src/services/STTService.ts
import * as SpeechTranscriber from 'expo-speech-transcriber';
import { Audio } from 'expo-av';

export async function startSTT() {  // Sem language, fixo em en-US/offline
  try {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') throw new Error('Permissão de microfone negada');

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    await SpeechTranscriber.recordRealTimeAndTranscribe();  // Sem argumentos
  } catch (err) {
    console.error('Erro ao iniciar STT:', err);
    throw err;
  }
}

export async function stopSTT() {
  try {
    await SpeechTranscriber.stopListening();
  } catch (err) {
    console.error('Erro ao parar STT:', err);
  }
}

// Hook para transcrição em tempo real (use no componente)
export function useTranscription() {
  return SpeechTranscriber.useRealTimeTranscription();
}