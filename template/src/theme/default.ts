import { Theme } from 'themed-props';

const primaryColorShades = ['#00A5B9', '#007D91', '#00566A'];
const whiteColorShades = ['#f7f7f7', '#edeced', '#c1bec1', '#979197'];
const blackColorShades = ['#0F1B2C', '#374255', '#626D82', '#909BB2'];
const successColorShades = ['#85D47B', '#5AA953', '#2F7F2D'];
const warningColorShades = ['#FF833A', '#D45F15', '#A93C00'];
const dangerColorShades = ['#CB1E1E', '#EF4538', '#FF6752'];

const colors = {
  primary: primaryColorShades,
  white: whiteColorShades,
  success: successColorShades,
  warning: warningColorShades,
  danger: dangerColorShades,
  text: '#0F1B2C',
  background: whiteColorShades,
  modes: {
    dark: {
      primary: primaryColorShades,
      white: whiteColorShades,
      text: '#f7f7f7',
      background: blackColorShades,
      success: successColorShades,
      warning: warningColorShades,
      danger: dangerColorShades,
    },
  },
};

const fonts = {
  serif: "'Karma', serif",
  'sans-serif': ["'Nunito Sans', sans-serif", "'Scada', sans-serif"],
};

const space = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160];
const sizes = [...space, 256];
const fontSizes = [0, 12, 16, 24, 36, 48, 64, 84, 96];
const letterSpacings = space;
const fontWeights = [0, 200, 300, 400, 600, 700, 800, 900];
const lineHeights = [0, 0.5, 1, 1.5, 2];
const shadows = [
  'none',
  '0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);',
  '0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12);',
  '0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1);',
  '0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);',
  '0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2);',
  '0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18);',
  '0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15);',
  '0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);',
];
const borders = {
  regular: '1px solid',
  thick: '2px solid',
  dashed: '1px dashed',
};
const breakpoints = [768, 1024, 1280, 1440, 1920];
const radii = {
  small: 4,
  regular: 8,
  circle: '50%',
};

const themeDefault: Theme = {
  name: 'default',
  colors,
  space,
  sizes,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  shadows,
  fonts,
  breakpoints,
  radii,
  borders,
};

export default themeDefault;
