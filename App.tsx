// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import './global.css';

import Routes from '@/routes';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
        <Routes />
        <Toast />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
