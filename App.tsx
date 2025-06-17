import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import './global.css';

import Routes from '@/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}
