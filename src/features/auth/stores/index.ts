import { AuthRepository } from '../repositories/AuthRepository';
import { createAuthStore } from './zustandAuthStore';

export const useAuthStore = createAuthStore(new AuthRepository());
