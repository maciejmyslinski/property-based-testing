module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'max-len': ['error', { code: 120 }],
    semi: ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/require-default-props': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['Label'],
        controlComponents: ['Field'],
        depth: 3,
      },
    ],
  },
};
