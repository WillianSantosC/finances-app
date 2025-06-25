import { User } from '../entities/User';

export interface IAuthRepository {
  signIn(email: string, password: string): Promise<{ user: User; token: string }>;
  signUp(name: string, email: string, password: string): Promise<void>;
  signOut(): void;
}
