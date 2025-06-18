import { useAuthStore } from '@/stores/useAuthStore';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

// Request interceptor to inject token
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor for response to capture errors like 401 (token expired)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      Toast.show({
        type: 'error',
        text1: 'Sessão expirada',
        text2: 'Por favor, faça login novamente.',
      });
      useAuthStore.getState().signOut();
    }

    return Promise.reject(error);
  }
);

export default api;
