const lightTheme = {
  primary: '#0070f3',
  text: '#272727',
  background: '#fafbfc',
  border: '#ebebeb',
};

const darkTheme: Theme = {
  primary: '#0070f3',
  text: '#cfcfcf',
  background: '#020c22',
  border: '#7a7a7a',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
