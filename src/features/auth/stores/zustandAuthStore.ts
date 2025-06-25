import { setupInterceptors } from '@/shared/services/apiAuth';
import { createZustandStorage } from '@/shared/utils/asyncStorageZustand';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../entities/User';
import { IAuthRepository } from '../repositories/IAuthRepository';

type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
};

type AuthActions = {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
};

type AuthStore = AuthState & AuthActions;

type AuthPersistState = Pick<AuthState, 'user' | 'token'>;

export const createAuthStore = (repository: IAuthRepository) => {
  return create<AuthStore>()(
    persist(
      (set, get) => {
        setupInterceptors(
          () => get().token,
          () => {
            repository.signOut();
            get().signOut();
          }
        );

        return {
          user: null,
          token: null,
          isLoading: false,

          signIn: async (email, password) => {
            try {
              set({ isLoading: true });
              const { user, token } = await repository.signIn(email, password);
              set({ user, token });
            } finally {
              set({ isLoading: false });
            }
          },

          signUp: async (name, email, password) => {
            try {
              set({ isLoading: true });
              await repository.signUp(name, email, password);
            } finally {
              set({ isLoading: false });
            }
          },

          signOut: () => {
            set({ user: null, token: null });
          },
        };
      },
      {
        name: 'auth-storage',
        storage: createZustandStorage<AuthPersistState>(),
        partialize: (state) => ({
          user: state.user,
          token: state.token,
        }),
      }
    )
  );
};
