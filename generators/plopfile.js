module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'Create a Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Components.tsx.hbs',
      },
      // {
      //   type: 'add',
      //   path: '../src/components/{{pascalCase name}}/stories.tsx',
      //   templateFile: 'templates/stories.tsx.hbs',
      // },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/styles.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ], // array of actions
  });
};
