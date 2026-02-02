import { Audio } from 'expo-av';

export async function recordAudio(durationMs = 8000) {
  const { status } = await Audio.requestPermissionsAsync();
  if (status !== 'granted') throw new Error('Permissão de microfone negada');

  await Audio.setAudioModeAsync({
    allowsRecordingIOS: true,
    playsInSilentModeIOS: true,
  });

  const recording = new Audio.Recording();
  await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
  await recording.startAsync();

  await new Promise(resolve => setTimeout(resolve, durationMs));
  await recording.stopAndUnloadAsync();

  const uri = recording.getURI();
  if (!uri) throw new Error('Falha na gravação');
  return uri;
}