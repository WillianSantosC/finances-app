import { Transaction } from '@/features/transactions/entities/Transaction';
import api from '@/shared/services/api';
import { ITransactionRepository } from './ITransactionRepository';

export class TransactionRepository implements ITransactionRepository {
  async list(date?: string): Promise<Transaction[]> {
    const response = await api.get('/receives', {
      params: { date },
    });

    return response.data.map((item: any) => ({
      id: item.id,
      description: item.description,
      value: item.value,
      type: item.type === 'receita' ? 'income' : 'expense',
      date: item.date,
    }));
  }

  async create(data: {
    description: string;
    value: number;
    type: 'receita' | 'despesa';
    date: string;
  }): Promise<void> {
    await api.post('/receive', data);
  }

  async delete(id: string): Promise<void> {
    await api.delete('/receives/delete', {
      params: {
        item_id: id,
      },
    });
  }
}
