module.exports = {
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    // override/add rules settings here
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
