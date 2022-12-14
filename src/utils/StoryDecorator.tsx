import { StoryDecorator as SD } from '@ladle/react';
import { ThemeProvider } from 'components/ThemeProvider';

const StoryDecorator: SD = (Component) => (
  <ThemeProvider>
    <Component />
  </ThemeProvider>
);

export default StoryDecorator;
