import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';

import { Input } from '@/components/Input';
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

        <Input
          placeholder="Seu e-mail"
          icon={<Fontisto name="email" size={25} color="#121212" />}
        />

        <Input
          placeholder="Sua senha"
          icon={<MaterialIcons name="lock" size={25} color="#121212" />}
        />

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
