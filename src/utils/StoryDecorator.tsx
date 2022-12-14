import { StoryDecorator as SD } from '@ladle/react';
import { ThemeProvider } from 'components/ThemeProvider';
import { Box } from 'components/Box';

const StoryDecorator: SD = (Component) => (
  <ThemeProvider>
    <Box>
      <Component />
    </Box>
  </ThemeProvider>
);

export default StoryDecorator;
