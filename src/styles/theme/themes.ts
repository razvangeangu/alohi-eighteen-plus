const lightTheme = {
  primary: '#00b7e5',
  text: '#272727',
  background: '#fafbfc',
  border: '#ebebeb',

  card: {
    background: '#fff',
    backgroundTransparent: 'rgba(256,256,256,0.9)',
  },
};

const darkTheme: Theme = {
  primary: '#00b7e5',
  text: '#cfcfcf',
  background: '#0d1117',
  border: '#21262d',

  card: {
    background: '#090c10',
    backgroundTransparent: 'rgba(0,0,0,0.9)',
  },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
