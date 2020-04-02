// https://github.com/vuejs/eslint-plugin-vue/tree/v3.14.0#readme
// https://eslint.vuejs.org/rules/
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  rules: {
    'no-debugger': 'error',
    'vue/no-confusing-v-for-v-if': 1, // 0 = off, 1 = warn, 2 = error
    'vue/require-v-for-key': 1,
    'vue/no-unused-vars': 0,  // 变量未使用
    'vue/mustache-interpolation-spacing': [1, 'always'], // {{ xxx }}, 括号内保持左右一个空格
    "vue/max-attributes-per-line": [1, {
      "singleline": 3,  // 单行最多3个属性
      "multiline": {
        "max": 1, // 多行显示的时候单行最多几个属性
        "allowFirstLine": false  // 属性是否可以在第一行（与标签同一行）
      }
    }],
    // 标签大小写风格
    "vue/component-name-in-template-casing": [1, "kebab-case", {
      "registeredComponentsOnly": true,
      "ignores": []
    }],
    // <list></list> or </list>
    "vue/html-self-closing": [1, {
      "html": {
        "void": "never",  // "always"要求在没有内容的元素上自动关闭, "never" 禁止自动关闭, "any" 不要强制自我关闭风格
        "normal": "any",
        "component": "never"
      },
    }],
    // 结束标签是否另起一行
    "vue/html-closing-bracket-newline": [1, {
      "singleline": "never",
      "multiline": "always"
    }],
    // js 缩进
    "vue/script-indent": [1, 2, {
      "baseIndent": 0,  // 相对于script标签的整体缩进
      "switchCase": 1,
      "ignores": []
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};