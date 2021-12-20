module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 13,
      sourceType: 'module',
    },
    plugins: ['react', 'react-native'],
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  };
  