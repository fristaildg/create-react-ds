const indexTemplate = (componentName) => `export type { ${componentName}Props } from './${componentName}';
export { default as ${componentName} } from './${componentName}';
`;

const componentTemplate = (componentName) => `import styled from 'styled-components';

export type ${componentName}Props = {};

const Styled${componentName} = styled.div\`\`;

const ${componentName} = (props: ${componentName}Props) => {
  return <Styled${componentName}>${componentName}</Styled${componentName}>;
};

export default ${componentName};
`;

const storyTemplate = (componentName) => `import StoryDecorator from 'utils/StoryDecorator';
import ${componentName} from './${componentName}';

export default {
  title: '${componentName}',
  decorators: [StoryDecorator],
};
export const Default = () => <${componentName} />;
`;

module.exports = {
  indexTemplate,
  componentTemplate,
  storyTemplate,
};
