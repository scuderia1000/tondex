module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks', 'react-perf'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/static-property-placement': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'no-bitwise': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'linebreak-style': 'off',
    'react/button-has-type': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react-hooks/rules-of-hooks': 'warn', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'no-use-before-define': 0,
    '@typescript-eslint/ban-types': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-undef': 0,
    'react/default-props-match-prop-types': 0,
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    'no-underscore-dangle': 0,
    'no-new': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'class-methods-use-this': 0,
    'array-callback-return': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['./src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
