import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { StackParamList } from './types';

const AuthStack = createNativeStackNavigator<StackParamList>();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
