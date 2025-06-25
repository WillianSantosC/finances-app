import { useShallow } from 'zustand/react/shallow';
import { useAuthStore } from '../stores';

export const useAuth = () => {
  const { user, token, isLoading, signIn, signUp, signOut } = useAuthStore(
    useShallow((state) => ({
      user: state.user,
      token: state.token,
      isLoading: state.isLoading,
      signIn: state.signIn,
      signUp: state.signUp,
      signOut: state.signOut,
    }))
  );

  return {
    user,
    token,
    isLoading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!token,
  };
};
