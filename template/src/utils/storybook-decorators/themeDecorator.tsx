import { Story } from '@storybook/react';
import { Button } from '../../components/Button';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../../components/ThemeProvider';
import { defaultTheme } from '../../theme';

const darkTheme = {
  ...defaultTheme,
  colors: defaultTheme.colors.modes?.['dark'],
  name: 'dark',
};

export const themeDecorator = (Story: Story) => {
  const [theme, setTheme] = useState<any>(defaultTheme);

  const handleSwitchTheme = () => {
    setTheme((prevTheme: typeof defaultTheme) =>
      prevTheme.name === 'dark' ? defaultTheme : darkTheme,
    );
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.background[0];
    const docsStory = document.querySelector<HTMLElement>('.docs-story');
    if (docsStory) {
      docsStory.style.backgroundColor = theme.colors.background[0];
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={handleSwitchTheme} variant="ghost" size="small">
          Switch theme
        </Button>
        <Story />
      </div>
    </ThemeProvider>
  );
};
