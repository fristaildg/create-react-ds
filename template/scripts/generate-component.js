const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const indexTemplate = `export type { ${componentName}Props } from './${componentName}';
export { default as ${componentName} } from './${componentName}';
`;

const componentTemplate = `import styled from 'styled-components';

export type ${componentName}Props = {};

const Styled${componentName} = styled.div\`\`;

const ${componentName} = (props: ${componentName}Props) => {
  return <Styled${componentName}>${componentName}</Styled${componentName}>;
};

export default ${componentName};
`;

const storyTemplate = `import StoryDecorator from 'utils/StoryDecorator';
import ${componentName} from './${componentName}';

export default {
  title: '${componentName}',
  decorators: [StoryDecorator],
};
export const Default = () => <${componentName} />;
`;

const createFolder = () => {
  return fs.mkdirSync(path.join(process.cwd(), 'src/components', componentName), { recursive: true });
};

const createFile = (folder) => ({ path, content }) => {
  const componentFolder = folder;

  fs.writeFile(`${componentFolder}/${path}`, content, (error) => {
    if (error) console.log(error);
  });
};

const generateComponent = () => {
  const folder = createFolder();
  const createFileInFolder = createFile(folder);
  const filesToCreate = [
    {
      path: 'index.ts',
      content: indexTemplate,
    },
    {
      path: `${componentName}.tsx`,
      content: componentTemplate,
    },
    {
      path: `${componentName}.stories.tsx`,
      content: storyTemplate,
    },
  ];

  filesToCreate.forEach(({ path, content }) => {
    createFileInFolder({ path, content });
  })
};

generateComponent();
