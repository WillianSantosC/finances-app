import { Input } from '@/components/Input';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';

const SignIn = () => {
  return (
    <View className="flex-1 bg-[#F0F4FF]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        className="flex-1 items-center justify-center">
        <Input placeholder="Nome" icon={<FontAwesome6 name="user" size={25} color="#121212" />} />

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
          <Text className="text-[20px] text-[#FFF]">Cadastrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
