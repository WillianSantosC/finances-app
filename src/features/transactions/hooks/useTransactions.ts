import { useBalance } from '@/features/balance/hooks/useBalance';
import { IBalanceRepository } from '@/features/balance/repositories/IBalanceRepository';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Transaction } from '../entities/Transaction';
import { ITransactionRepository } from '../repositories/ITransactionRepository';

export const useTransactions = (
  repository: ITransactionRepository,
  balanceRepository: IBalanceRepository,
  date?: Date
) => {
  const queryClient = useQueryClient();
  const { refetch: refetchBalance } = useBalance(balanceRepository, date);

  const formattedDate = date ? format(date, 'dd/MM/yyyy') : undefined;

  const query = useQuery<Transaction[]>({
    queryKey: ['transactions', formattedDate],
    queryFn: () => repository.list(formattedDate),
    staleTime: 1000 * 60 * 5,
  });

  const create = useMutation({
    mutationFn: repository.create.bind(repository),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions', formattedDate] });
      refetchBalance();
    },
  });

  const remove = useMutation({
    mutationFn: repository.delete.bind(repository),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions', formattedDate] });
      refetchBalance();
    },
  });

  return {
    ...query,
    create,
    remove,
  };
};
