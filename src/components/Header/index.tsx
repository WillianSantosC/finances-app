import Feather from '@expo/vector-icons/Feather';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className={styles.container}>
      <TouchableOpacity
        role="button"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        className="content-center items-center">
        <Feather name="menu" size={35} color="black" />
      </TouchableOpacity>
      <Text accessibilityHint="header" className="ml-[8px] text-[22px]">
        {title}
      </Text>
    </SafeAreaView>
  );
};

export default Header;
