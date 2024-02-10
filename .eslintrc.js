module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'prettier/prettier': [
      'warn',
      { singleQuote: true, endOfLine: 'auto', jsxSingleQuote: true },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
  },
};
