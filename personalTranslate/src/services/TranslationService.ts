// src/services/TranslationService.ts
import { onTranslateTask } from 'expo-translate-text';

export async function translate(
  text: string,
  from: string = 'en',
  to: string = 'pt-BR'
): Promise<string> {
  try {
    const result = await onTranslateTask({
      input: text,
      sourceLangCode: from,  // Corrigid: sourceLangCode
      targetLangCode: to,    // Corrigid: targetLangCode
      // Opcional: requireCharging: true, requiresWifi: true
    });

    const translatedTexts = result.translatedTexts;

    if (typeof translatedTexts === 'string') {
      return translatedTexts;
    }

    if (Array.isArray(translatedTexts)) {
      return translatedTexts[0] ?? 'Erro na tradução';
    }

    // Caso objeto: assume primeiro valor
    const firstKey = Object.keys(translatedTexts)[0];
    const value = translatedTexts[firstKey];

    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value[0] ?? 'Erro na tradução';
    }

    return 'Erro na tradução';
  } catch (err) {
    console.error('Erro na tradução:', err);
    return 'Falha ao traduzir.';
  }
}

// Opcional: pré-baixar modelos (não exposto diretamente, mas pacote gerencia)
export async function initTranslation() {
  console.log('Inicialização de tradução pronta');
}