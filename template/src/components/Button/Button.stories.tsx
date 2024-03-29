import { StoryFn, Meta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <>
    <Button {...args} size="small">
      Button
    </Button>
    <Button {...args}>Button</Button>
    <Button {...args} size="large">
      Button
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'regular',
  onClick: () => alert('clicked'),
};
