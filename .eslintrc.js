module.exports = {
  extends: ['airbnb'],
  plugins: [
    'eslint-plugin-jest',
    'eslint-plugin-react-hooks',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // '@typescript-eslint/indent': ['error', 2],
    // 'react/no-did-mount-set-state': 'off',
    'import/prefer-default-export': 'off',
    'no-debugger': 'warn',
    'max-len': ['error', {code: 200}],
    // 'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       // allow to find TypeScript files when there is no extension for an import statement
  //       extensions: RESOLVE_EXTENSIONS
  //     }
  //   }
  // },
};
