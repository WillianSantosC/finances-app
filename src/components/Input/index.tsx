import { ReactNode } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { inputContainerWithBorder, styles } from './styles';

type InputProps = TextInputProps & {
  label?: string;
  errorMessage?: string;
  icon?: ReactNode;
};

export const Input = ({ label, errorMessage, icon, ...rest }: InputProps) => {
  const hasError = !!errorMessage;

  return (
    <View className={styles.container}>
      {label && <Text className={styles.label}>{label}</Text>}

      <View className={inputContainerWithBorder(hasError)}>
        {icon && <View className={styles.icon}>{icon}</View>}

        <TextInput className={styles.input} placeholderTextColor="#A1A1A1" {...rest} />
      </View>

      {errorMessage && <Text className={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
