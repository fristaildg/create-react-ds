import StoryDecorator from '../../utils/StoryDecorator';
import Button from './Button';

export default {
  title: 'Button',
  decorators: [StoryDecorator],
};
export const Default = () => (
  <Button color="text" bg="primary">
    Click
  </Button>
);
