// linting devDependencies
// babel-eslint eslint eslint-config-airbnb eslint-loader eslint-plugin-import
// eslint-plugin-jsx-a11y eslint-plugin-react prettier-eslint
module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },

  extends: 'airbnb',

  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'consistent-return': ['off'],

    'import/no-named-as-default': ['off'],

    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'always',
      },
    ],

    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],

    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
      },
    ],

    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
  },
};
