import api from './api';

export const setupInterceptors = (getToken: () => string | null, onUnauthorized: () => void) => {
  // Request interceptor to inject token
  api.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Interceptor for response to capture errors like 401 (token expired)
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        onUnauthorized();
      }
      return Promise.reject(error);
    }
  );
};
