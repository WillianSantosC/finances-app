import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Input } from '@/components/Input';
import { AuthStackParamsList } from '@/routes/types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useRHFRegister } from '@/hooks/useRHFRegister';
import { useAuthStore } from '@/stores/useAuthStore';

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })
  .required();

export default function SignIn() {
  const signIn = useAuthStore((state) => state.signIn);
  const isLoading = useAuthStore((state) => state.isLoading);

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamsList>>();

  const { control, setValue, trigger, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const emailProps = useRHFRegister<FormData>('email', control, setValue, trigger, formState);
  const passwordProps = useRHFRegister<FormData>('password', control, setValue, trigger, formState);

  const onSubmit = async (data: FormData) => {
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-1 bg-lightBg">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        className="flex-1 items-center justify-center px-4">
        <Image className="mb-[25px]" source={require('../../assets/Logo.png')} />

        <Input
          placeholder="Seu e-mail"
          icon={<Fontisto name="email" size={25} color="#121212" />}
          keyboardType="email-address"
          autoCapitalize="none"
          {...emailProps}
        />

        <Input
          placeholder="Sua senha"
          icon={<MaterialIcons name="lock" size={25} color="#121212" />}
          secureTextEntry
          {...passwordProps}
        />

        <TouchableOpacity
          disabled={!formState.isValid || isLoading}
          onPress={handleSubmit(onSubmit)}
          activeOpacity={0.8}
          className={`mt-4 h-[45px] w-[90%] flex-row items-center justify-center rounded-[8px] ${
            formState.isValid && !isLoading ? 'bg-blue' : 'bg-blue/50'
          }`}>
          {isLoading ? (
            <ActivityIndicator color="#3B3DBF" />
          ) : (
            <Text className="text-[20px] text-white">Acessar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          className="mb-[10px] mt-[10px]">
          <Text>Criar uma conta!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
