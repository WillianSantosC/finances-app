export type Transaction = {
  id: string;
  description: string;
  value: number;
  type: 'income' | 'expense';
  date: string;
};
