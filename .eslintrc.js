// https://github.com/vuejs/eslint-plugin-vue/tree/v3.14.0#readme
// https://eslint.vuejs.org/rules/
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["eslint:recommended","plugin:vue/recommended"],
  rules: {
    'no-debugger': 'error',
    'vue/no-confusing-v-for-v-if': 1, // 0 = off, 1 = warn, 2 = error
    'vue/require-v-for-key': 1,
    // 变量未使用
    'no-unused-vars': 1,
    // 分号结尾  
    'semi': [1, 'never'], 
    // single 单引号，double 双引号
    "quotes": [1, "single"],
    'semi-spacing': [1, {
      'before': false,
      'after': true
    }], //分号前后空格
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
    }],
    // 数组空格配置
    "array-bracket-spacing":[1,'always',{
      'singleValue':false,  // 包含单个元素的数组括号内是否使用空格
      'objectsInArrays':false,  // 
      'arraysInArrays':false,
    }],
    // 花括号内空格配置
    "object-curly-spacing": [1, "always"],
    // 键值对空格配置
    "key-spacing":[1, { 
      "beforeColon": false, // 冒号左边是否需要空格
      "afterColon": true  // 冒号右边是否需要空格
    }],
    // 关键字空格配置（如if else）
    "keyword-spacing": [1, { 
      "before": true,
      "after": true,
     }],
     // 箭头函数空格配置
    "arrow-spacing": [1, { 
       "before": true, 
       "after": true 
      }],
    // 代码块空格配置
    "block-spacing": [1, "always"],
    // 代码块中是否可以为空
    'no-empty': 0,  
    // 三等号
    'eqeqeq':1
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};