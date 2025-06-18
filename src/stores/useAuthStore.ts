import api from '@/services/api';
import { createZustandStorage } from '@/utils/asyncStorageZustand';
import Toast from 'react-native-toast-message';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthStore = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
};

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,

      signIn: async (email, password) => {
        try {
          set({ isLoading: true });

          const response = await api.post('/login', {
            email,
            password,
          });

          const { id, name, token } = response.data;

          set({
            user: {
              id,
              name,
              email,
            },
            token,
          });

          Toast.show({
            type: 'success',
            text1: 'Login realizado com sucesso!',
          });
        } catch (error) {
          console.error('Erro no login:', error);
          Toast.show({
            type: 'error',
            text1: 'Erro no login',
            text2: 'Verifique suas credenciais.',
          });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      signUp: async (name, email, password) => {
        try {
          set({ isLoading: true });

          const response = await api.post('/users', {
            name,
            email,
            password,
          });

          const { id } = response.data;

          set({
            user: {
              id,
              name,
              email,
            },
            token: null,
          });
          Toast.show({
            type: 'success',
            text1: 'Cadastro realizado com sucesso!',
          });
        } catch (error) {
          console.error('Erro no cadastro:', error);
          Toast.show({
            type: 'error',
            text1: 'Erro no cadastro',
            text2: 'Tente novamente.',
          });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      signOut: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage',
      storage: createZustandStorage<AuthStore>(),
    }
  )
);
