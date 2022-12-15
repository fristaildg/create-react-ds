import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import themeDefault from 'theme/default';

export type Theme = {
  name: string;
  colors: Record<string, unknown>;
  [key: string]: unknown;
};

type ThemeProviderProps = {
  theme?: Theme;
};

const ThemeProvider: FC<PropsWithChildren & ThemeProviderProps> = ({
  children,
  theme = themeDefault,
}) => {
  return <ScThemeProvider theme={theme}>{children}</ScThemeProvider>;
};

export default ThemeProvider;
