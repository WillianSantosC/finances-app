import Header from '@/components/Header';
import { useBalance } from '@/domain/useCases/useBalance';
import { useTransactions } from '@/domain/useCases/useTransactions';
import { BalanceRepository } from '@/infra/repositories/BalanceRepository';
import { TransactionRepository } from '@/infra/repositories/TransactionRepository';
import { useAuthStore } from '@/stores/useAuthStore';
import { ActivityIndicator, Button, FlatList, SafeAreaView, Text, View } from 'react-native';

const balanceRepository = new BalanceRepository();
const transactionRepository = new TransactionRepository();

const Home = () => {
  const today = new Date();

  const signOut = useAuthStore((state) => state.signOut);

  const { data: balance, isLoading: loadingBalance } = useBalance(balanceRepository, today);
  const { data: transactions, isLoading: loadingTransactions } = useTransactions(
    transactionRepository,
    balanceRepository,
    today
  );

  const isLoading = loadingBalance || loadingTransactions;

  return (
    <SafeAreaView className="flex-1 bg-lightBg">
      <Header title="Minhas Movimentações" />

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#3B3DBF" />
        </View>
      ) : (
        <View className="flex-1 px-4">
          {/* ==== Balance Section ==== */}
          <View className="mb-4 rounded-lg bg-white p-4">
            <Text className="mb-2 text-xl font-bold">Resumo</Text>
            <Text>Saldo: R$ {balance?.balance ?? 0}</Text>
            <Text>Receitas: R$ {balance?.income ?? 0}</Text>
            <Text>Despesas: R$ {balance?.expense ?? 0}</Text>
          </View>

          {/* ==== Transactions List ==== */}
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text className="mt-4 text-center">Nenhuma movimentação encontrada.</Text>
            }
            renderItem={({ item }) => (
              <View className="mb-3 rounded-lg bg-white p-4">
                <Text className="font-semibold">{item.description}</Text>
                <Text
                  className={`${
                    item.type === 'income' ? 'text-green-600' : 'text-red-600'
                  } font-bold`}>
                  {item.type === 'income' ? '+' : '-'} R$ {item.value}
                </Text>
                <Text className="text-sm text-gray-500">{item.date}</Text>
              </View>
            )}
          />

          <Button title="LOGOUT" onPress={() => signOut()} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
