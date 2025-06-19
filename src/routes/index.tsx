import { useAuthStore } from '@/stores/useAuthStore';
import { ActivityIndicator, View } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-lightBg">
        <ActivityIndicator size="large" color="#3b3dbf" />
      </View>
    );
  }

  const signed = !!user && !!token;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
