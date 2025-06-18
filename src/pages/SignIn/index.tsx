import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';

import { StackParamList } from '@/routes/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SignIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View className="flex-1 bg-[#F0F4FF]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        className="flex-1 items-center justify-center">
        <Image className="mb-[25px]" source={require('../../assets/Logo.png')} />

        <View className={styles.areaInput}>
          <TextInput className={styles.input} placeholder="Seu e-mail" />
        </View>

        <View className={styles.areaInput}>
          <TextInput className={styles.input} placeholder="Sua senha" />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className="mt-[10px] h-[45px] w-[90%] items-center justify-center rounded-[8px] bg-[#3b3dbf]">
          <Text className="text-[20px] text-[#FFF]">Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          className="mb-[10px] mt-[10px]">
          <Text>Criar uma conta!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
