import { useAuth } from '@/features/auth/hooks/useAuth';
import { ActivityIndicator, View } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { user, token, isLoading } = useAuth();

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
