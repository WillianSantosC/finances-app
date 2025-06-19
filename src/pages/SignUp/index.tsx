import { Input } from '@/components/Input';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useRHFRegister } from '@/hooks/useRHFRegister';
import { StackParamList } from '@/routes/types';
import { useAuthStore } from '@/stores/useAuthStore';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup
  .object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup
      .string()
      .min(6, 'Senha deve ter pelo menos 6 caracteres')
      .required('Senha é obrigatória'),
  })
  .required();

export default function SignUp() {
  const signUp = useAuthStore((state) => state.signUp);
  const isLoading = useAuthStore((state) => state.isLoading);

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const { control, setValue, trigger, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const nameProps = useRHFRegister<FormData>('name', control, setValue, trigger, formState);
  const emailProps = useRHFRegister<FormData>('email', control, setValue, trigger, formState);
  const passwordProps = useRHFRegister<FormData>('password', control, setValue, trigger, formState);

  const onSubmit = async (data: FormData) => {
    try {
      await signUp(data.name, data.email, data.password);
      navigation.navigate('SignIn');
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
        <Input
          placeholder="Nome"
          icon={<FontAwesome6 name="user" size={25} color="#121212" />}
          {...nameProps}
        />

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
            <Text className="text-[20px] text-white">Cadastrar</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
