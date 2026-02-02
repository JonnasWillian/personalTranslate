import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <HomeScreen />
        <StatusBar style="auto" />
      </AppProvider>
    </SafeAreaProvider>
  );
}