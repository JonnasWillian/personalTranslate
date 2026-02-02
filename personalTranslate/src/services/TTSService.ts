import * as Speech from 'expo-speech';

export async function speak(text: string, lang = 'en-US') {
  await Speech.speak(text, { language: lang });
}