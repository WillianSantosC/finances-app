import { View } from 'react-native';
import AuthRoutes from './auth.routes';

const Routes = () => {
  //   const loading = false;
  const signed = false;

  return signed ? <View></View> : <AuthRoutes />;
};

export default Routes;
