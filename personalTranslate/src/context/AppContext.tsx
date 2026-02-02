import React, { createContext, useState, ReactNode } from 'react';
import { AppState } from '../types';

interface AppContextType extends AppState {
  setRecording: (value: boolean) => void;  // Atualiza flag de gravação
  setTranscribedText: (text: string) => void;  // Set texto transcrito
  setTranslatedText: (text: string) => void;  // Set texto traduzido
  setLoading: (value: boolean) => void;  // Toggle loading
  setError: (error: string | null) => void;  // Set erro
  setSourceLang: (lang: string) => void;  // Muda língua origem
  setTargetLang: (lang: string) => void;  // Muda língua destino
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    isRecording: false,
    transcribedText: '',
    translatedText: '',
    isLoading: false,
    error: null,
    sourceLang: 'pt-BR',  // Default: Origem Português Brasil
    targetLang: 'en-US',  // Default: Destino Inglês US
  });

  const setRecording = (value: boolean) => setState((prev) => ({ ...prev, isRecording: value }));
  const setTranscribedText = (text: string) => setState((prev) => ({ ...prev, transcribedText: text }));
  const setTranslatedText = (text: string) => setState((prev) => ({ ...prev, translatedText: text }));
  const setLoading = (value: boolean) => setState((prev) => ({ ...prev, isLoading: value }));
  const setError = (error: string | null) => setState((prev) => ({ ...prev, error }));
  const setSourceLang = (lang: string) => setState((prev) => ({ ...prev, sourceLang: lang }));
  const setTargetLang = (lang: string) => setState((prev) => ({ ...prev, targetLang: lang }));

  return (
    <AppContext.Provider value={{ ...state, setRecording, setTranscribedText, setTranslatedText, setLoading, setError, setSourceLang, setTargetLang }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};