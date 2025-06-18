import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import './global.css';

import Routes from '@/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
      <Routes />
      <Toast />
    </NavigationContainer>
  );
}
