module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off'
  }
};
