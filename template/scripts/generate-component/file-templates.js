const indexTemplate = (componentName) => `export type { ${componentName}Props } from './${componentName}';
export { default as ${componentName} } from './${componentName}';
`;

const componentTemplate = (componentName) => `import styled from 'styled-components';
import { ForwardedRef, forwardRef } from 'react';

export type ${componentName}Props = {};

const Styled${componentName} = styled.div\`\`;

const ${componentName} = (props: ${componentName}Props, ref: ForwardedRef<HTMLDivElement>) => {
  return <Styled${componentName} ref={ref}>${componentName}</Styled${componentName}>;
};

export default forwardRef(${componentName});
`;

const storyTemplate = (componentName) => `import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ${componentName} } from '.';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => (
  <${componentName} {...args}>${componentName}</${componentName}>
);

export const Default = Template.bind({});
`;

module.exports = {
  indexTemplate,
  componentTemplate,
  storyTemplate,
};
