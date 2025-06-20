import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Balance } from '../entities/Balance';
import { IBalanceRepository } from '../repositories/IBalanceRepository';

export const useBalance = (repository: IBalanceRepository, date?: Date) => {
  const formattedDate = date ? format(date, 'dd/MM/yyyy') : undefined;

  return useQuery<Balance>({
    queryKey: ['balance', formattedDate],
    queryFn: () => repository.get(formattedDate),
    staleTime: 1000 * 60 * 5, // 5 min
  });
};
