export type AuthStackParamsList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AppStackParamsList = {
  Home: undefined;
};

export type RootStackParamsList = AppStackParamsList & AuthStackParamsList;
