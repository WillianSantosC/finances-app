import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '@/pages/Home';
import { AppStackParamsList } from './types';

const AppDrawer = createDrawerNavigator<AppStackParamsList>();

const AppRoutes = () => {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: '#FFF', paddingTop: 20 },

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212',
      }}>
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
};

export default AppRoutes;
