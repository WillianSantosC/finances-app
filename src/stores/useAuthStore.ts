import Toast from 'react-native-toast-message';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import api from '@/shared/services/api';
import { setupInterceptors } from '@/shared/services/apiAuth';
import { createZustandStorage } from '@/shared/utils/asyncStorageZustand';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
};

type AuthActions = {
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
};

export type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => {
      //! Interceptors setup
      setupInterceptors(
        () => get().token,
        () => {
          Toast.show({
            type: 'error',
            text1: 'Sessão expirada',
            text2: 'Por favor, faça login novamente.',
          });
          get().signOut();
        }
      );

      const authState: AuthState = {
        user: null,
        token: null,
      };

      const authActions: AuthActions = {
        isLoading: false,

        signIn: async (email, password) => {
          try {
            set({ isLoading: true });

            const response = await api.post('/login', { email, password });
            const { id, name, token } = response.data;

            set({
              user: { id, name, email },
              token,
            });

            Toast.show({
              type: 'success',
              text1: 'Login realizado com sucesso!',
            });
          } catch (error) {
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

            const response = await api.post('/users', { name, email, password });
            const { id } = response.data;

            set({
              user: { id, name, email },
              token: null,
            });

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
          } finally {
            set({ isLoading: false });
          }
        },

        signOut: () => {
          set({ user: null, token: null });
          Toast.show({
            type: 'info',
            text1: 'Sessão encerrada',
          });
        },
      };

      return {
        ...authState,
        ...authActions,
      };
    },
    {
      name: 'auth-storage',
      storage: createZustandStorage<AuthState>(),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);
