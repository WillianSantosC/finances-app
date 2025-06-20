import { Balance } from '@/domain/entities/Balance';
import { IBalanceRepository } from '@/domain/repositories/IBalanceRepository';
import api from '../services/api';

export class BalanceRepository implements IBalanceRepository {
  async get(date?: string): Promise<Balance> {
    const response = await api.get('/balance', {
      params: { date },
    });

    const data = response.data as { tag: string; saldo: number }[];

    const mapped = data.reduce<Balance>(
      (acc, item) => {
        if (item.tag === 'saldo') acc.balance = item.saldo;
        if (item.tag === 'receita') acc.income = item.saldo;
        if (item.tag === 'despesa') acc.expense = item.saldo;
        return acc;
      },
      { balance: 0, income: 0, expense: 0 }
    );

    return mapped;
  }
}
