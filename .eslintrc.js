module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'indent': 'off',
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 1
    }]
  },
  "ecmaFeatures": {
    "modules": true,
    "spread": true,
    "restParams": true
  },
  "rules": {
    "no-unused-vars": 2,
    "no-undef": 2
  },
  "parserOptions": {
    parser: "babel-eslint"
  },
}
