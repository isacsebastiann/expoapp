import { StyleSheet } from 'react-native';

export const Colors = {
  dark: '#333',
  light: '#fff',
  primary: '#007bff',
  secondary: '#ffd33d',
};

export const Fonts = {
  main: 'System',
  size: 18,
  weight: 'bold',
};

export const GlobalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
