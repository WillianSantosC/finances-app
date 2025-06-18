import { useEffect, useState } from 'react';
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
  UseFormSetValue,
  UseFormStateReturn,
  UseFormTrigger,
} from 'react-hook-form';

export function useRHFRegister<TFieldValues extends FieldValues>(
  name: Path<TFieldValues>,
  control: Control<TFieldValues>,
  setValue: UseFormSetValue<TFieldValues>,
  trigger: UseFormTrigger<TFieldValues>,
  formState: UseFormStateReturn<TFieldValues>,
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>
) {
  const [value, setLocalValue] = useState<PathValue<TFieldValues, Path<TFieldValues>> | ''>('');

  useEffect(() => {
    control.register(name, rules);
  }, [control, name, rules]);

  return {
    value,
    onChangeText: (text: PathValue<TFieldValues, Path<TFieldValues>>) => {
      setLocalValue(text);
      setValue(name, text, { shouldValidate: true });
    },
    onBlur: () => trigger(name),
    errorMessage: formState.errors[name]?.message as string | undefined,
  };
}
