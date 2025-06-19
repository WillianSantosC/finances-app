import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '@/pages/Home';
import { AppStackParamsList } from './types';

const AppDrawer = createDrawerNavigator<AppStackParamsList>();

const AppRoutes = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
};

export default AppRoutes;
