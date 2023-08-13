module.exports = {
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: ['plugin:import/recommended'],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./*', '../*'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          ['unknown', 'type'],
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        distinctGroup: true,
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],
    'import/no-unresolved': 'error',
  },
};
