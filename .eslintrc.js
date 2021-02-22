module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/prop-types': 1,
    'react/jsx-filename-extension': 0,
    'comma-dangle': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off'
  },
  overrides: [
    {
      files: ['*.jsx', '*.js']
    }
  ]
};
