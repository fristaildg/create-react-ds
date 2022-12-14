import StoryDecorator from 'utils/StoryDecorator';
import Button from './Button';

export default {
  title: 'Button',
  decorators: [StoryDecorator],
};
export const Default = () => <Button>Click</Button>;
