import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '.';

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box />;

export const Default = Template.bind({});
