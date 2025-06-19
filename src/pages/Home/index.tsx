import { useAuthStore } from '@/stores/useAuthStore';
import { Button, Text, View } from 'react-native';

const Home = () => {
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <View>
      <Text>Home</Text>
      <Button title="Sair da conta" onPress={() => signOut()} />
    </View>
  );
};

export default Home;
