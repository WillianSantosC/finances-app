import api from '@/shared/services/api';
import Toast from 'react-native-toast-message';
import { User } from '../entities/User';
import { IAuthRepository } from './IAuthRepository';

export class AuthRepository implements IAuthRepository {
  async signIn(email: string, password: string): Promise<{ user: User; token: string }> {
    try {
      const response = await api.post('/login', { email, password });
      const { id, name, token } = response.data;

      Toast.show({
        type: 'success',
        text1: 'Login realizado com sucesso!',
      });

      return {
        user: { id, name, email },
        token,
      };
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro no login',
        text2: 'Verifique suas credenciais.',
      });
      throw error;
    }
  }

  async signUp(name: string, email: string, password: string): Promise<void> {
    try {
      await api.post('/users', { name, email, password });

      Toast.show({
        type: 'success',
        text1: 'Cadastro realizado com sucesso!',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro no cadastro',
        text2: 'Tente novamente.',
      });
      throw error;
    }
  }

  signOut(): void {
    Toast.show({
      type: 'info',
      text1: 'Sessão encerrada',
    });
  }
}
