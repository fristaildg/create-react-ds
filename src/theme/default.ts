const colors = {
  primary: 'red',
  secondary: 'green',
  text: '#000000',
  background: '#FFFFFF',
  modes: {
    dark: {
      text: '#FFFFFF',
      background: '#000000',
      primary: '#00AD3C',
      secondary: 'red',
    },
  },
};

const Button = {
  backgroundColor: colors.primary,
  color: colors.text,
};

const themeDefault = {
  name: 'default',
  colors,
  Button,
};

export default themeDefault;
