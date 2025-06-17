# React Native Boilerplate 🚀

A highly scalable React Native boilerplate using Expo, TypeScript, NativeWind (Tailwind CSS for React Native), ESLint, Prettier, Husky, and Testing Library. This template is designed to help you bootstrap robust and well-structured React Native applications faster.

## 🛠️ Tech Stack

- [Expo](https://expo.dev/) – Build and deploy React Native apps quickly.
- [React Native](https://reactnative.dev/) – Framework for building native apps.
- [TypeScript](https://www.typescriptlang.org/) – Static typing.
- [NativeWind](https://www.nativewind.dev/) – Tailwind CSS for React Native.
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) – Code formatting and linting.
- [Husky](https://typicode.github.io/husky/#/) + [Lint-Staged](https://github.com/okonet/lint-staged) – Git hooks.
- [Plop](https://plopjs.com/) – Code generators.
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/) – Unit and component testing.

---

## 📦 Installation

```bash
git clone https://github.com/WillianSantosC/react-native-boilerplate.git
cd react-native-boilerplate
npm install
# or
yarn
```

---

## 🚀 Running the Project

- Run on Web:

```bash
npm run web
```

- Run on Android:

```bash
npm run android
```

- Run on iOS:

```bash
npm run ios
```

- Run on Expo Dev Client:

```bash
npm run start
```

---

## ✍️ Code Linting & Formatting

Run lint:

```bash
npm run lint
```

Format code with Prettier:

```bash
npx prettier --write .
```

---

## 🔨 Generate Components with Plop

```bash
npm run generate
```

This will prompt you to create components, screens, hooks, or other entities based on your plopfile configuration.

---

## 🧪 Testing

Run tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

---

## 🎨 Styling with NativeWind

Use Tailwind CSS utility classes directly in React Native components:

```tsx
<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-lg font-bold text-blue-500">Hello World</Text>
</View>
```

---

## ✅ TODO / Improvements

- Improve testing setup (enhanced Jest setup).
- Create additional generators with Plop (e.g., for services, stores).
- Add Storybook integration (optional).

---

## 👨‍💻 Author

- Willian Santos – [@WillianSantosC](https://github.com/WillianSantosC)
