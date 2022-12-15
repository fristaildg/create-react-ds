import { StoryDecorator as SD } from '@ladle/react';
import { ThemeProvider } from 'components/ThemeProvider';
import { Box } from 'components/Box';
import { defaultTheme } from 'theme';
import { useState } from 'react';
import { Button } from 'components/Button';
import { Theme } from 'components/ThemeProvider/ThemeProvider';

const darkTheme = {
  ...defaultTheme,
  name: 'dark',
  colors: defaultTheme.colors.modes.dark,
};

const StoryDecorator: SD = (Component) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const handleSetTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.name === 'dark' ? defaultTheme : darkTheme,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" width="100vw" bg="background" color="text">
        <Button onClick={handleSetTheme}>Change theme</Button>
        <p>{theme.name}</p>
        <Component />
      </Box>
    </ThemeProvider>
  );
};

export default StoryDecorator;
