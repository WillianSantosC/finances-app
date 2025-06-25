import { Transaction } from '../entities/Transaction';

export interface ITransactionRepository {
  list(date?: string): Promise<Transaction[]>;
  create(data: {
    description: string;
    value: number;
    type: 'receita' | 'despesa';
    date: string;
  }): Promise<void>;
  delete(id: string): Promise<void>;
}
