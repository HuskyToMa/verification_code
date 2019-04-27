# verification_code
前端生成验证码，数字，字母

# 安装
1. npm install @zn_husky/vCode
2. 下载github，直接使用webpack打包出dist文件，引入其中js文件

# 使用方法

``` javascript
<div id="v-code"></div>// 同步修改
new vCode({
    el: 'v-code',   // 默认值为v-code，可自定义
    codeLength: 4,  // 默认值为4，可自定义
})
```