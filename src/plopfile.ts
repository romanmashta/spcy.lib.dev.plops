import { NodePlopAPI } from 'plop';

export default function (plop: NodePlopAPI) {
  plop.addHelper('cwd', () => process.cwd());
  plop.setGenerator('model', {
    description: 'model declaration',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'model name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{cwd}}/{{dashCase name}}.model.ts',
        templateFile: '../plop-templates/entity.model.hbs'
      },
      {
        type: 'add',
        template: '\r\n',
        path: '{{cwd}}/index.model.ts',
        skipIfExists: true
      },
      {
        type: 'append',
        unique: true,
        pattern: /^/,
        separator: '',
        path: '{{cwd}}/index.model.ts',
        templateFile: '../plop-templates/index.model.hbs'
      }
    ]
  });
}
