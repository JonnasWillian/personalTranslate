export interface AppState {
    isRecording: boolean;
    transcribed: string;
    translated: string;
    loading: boolean;
    error: string | null;
    sourceLang: string;
    targetLang: string;
  }