import { Balance } from '../entities/Balance';

export interface IBalanceRepository {
  get(date?: string): Promise<Balance>;
}
