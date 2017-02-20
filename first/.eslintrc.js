// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',  // 表示继承一个标准的规则（上面链接中海油很多其他的规则）
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {  // 这个是对具体的规则进行修改
    // allow paren-less arrow functions
    'arrow-parens': 0, // 表示一个线程函数，允许其前面不写括号【这些为0的表示忽略这些检查】
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0 // 表示不允许代码中出现degug选项
    // 这里表示，如果是开发环境允许debug，如果是生产环境，就不允许有debug
  }
}



// eslint的配置文件