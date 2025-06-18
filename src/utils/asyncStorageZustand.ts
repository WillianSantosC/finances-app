import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage } from 'zustand/middleware';

/**
 * Cria um storage tipado para persistência Zustand usando AsyncStorage
 * @example
 * const storage = createZustandStorage<AuthStore>();
 */
export const createZustandStorage = <T>() => {
  return createJSONStorage<T>(() => AsyncStorage);
};
