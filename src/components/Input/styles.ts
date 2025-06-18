export const styles = {
  container: 'w-[90%] mb-4',
  label: 'mb-1 text-base text-black font-medium',
  inputContainer: 'flex-row items-center rounded-lg bg-white px-3 border',
  input: 'flex-1 h-[45px] text-[17px] text-black',
  icon: 'mr-2',
  errorMessage: 'mt-1 text-sm text-red',
};

export const inputContainerWithBorder = (hasError: boolean) => {
  return `${styles.inputContainer} ${hasError ? 'border-red' : 'border-[#E8E8E8]'}`;
};
