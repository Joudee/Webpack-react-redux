# Webpack+react+redux环境搭建
终端操作
```sh
npm install
npm start
```
操作完成，相关的环境已经配好，直接在浏览器输入0.0.0.0:8000即可访问。在clinet.jsx直接调用自己写的组件

#相关环境搭建

##Webpack安装

####使用npm全局安装Webpack

```sh
npm install webpack -g
```

####创建package.json文件

```sh
npm install webpack --save-dev
```

####在package.json文件编辑需要的相关组件

```js
  "devDependencies": {
    "babel-core": "^6.9.1",//版本号，为空自动安装最新版本
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "redux-devtools": "^3.3.1",
    "webpack": "^1.13.1"
  },
  "dependencies": {
    "babel-polyfill": "^6.9.1",
    "draft-js": "^0.7.0",
    "jquery": "^3.0.0",
    "moment": "^2.13.0",
    "react": "^15.0.0",
    "react-addons-css-transition-group": "^15.0.2",
    "react-document-title": "^2.0.1",
    "react-dom": "^0.14.6",
    "react-hot-loader": "^1.3.0",
    "react-motion": "^0.4.2",
    "react-redux": "^4.4.5",
    "react-responsive-mixin": "^0.3.5",
    "react-router": "^1.0.2",
    "react-router-redux": "^3.0.0",
    "react-swipeable": "^3.4.0",
    "react-timer-mixin": "^0.13.3",
    "react-waypoint": "^2.0.3",
    "redux": "^3.3.1",
    "redux-actions": "^0.9.1",
    "redux-immutablejs": "0.0.8",
    "redux-logger": "^2.4.0",
    "redux-router": "^1.0.0-beta5",
    "redux-thunk": "^1.0.3",
    "webpack": "^1.12.14",
    "webpack-dev-server": "^1.14.1"
  }
```