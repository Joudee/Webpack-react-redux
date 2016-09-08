# Webpack+react+redux环境搭建
终端操作
```js
npm install
npm start//需要在package.json中配置
```
操作完成，相关的环境已经配好，直接在浏览器输入0.0.0.0:8000即可访问。在clinet.jsx直接调用自己写的组件

#相关环境搭建

##在package.json文件编辑需要的相关组件

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

##React+redux的使用

首先在入口文件client.jsx中使用Provider关联

```js
const store = createMyStore(reducer)
<Provider store={store}>
    {routes}
</Provider>
```

如果不需要使用middlewares（中间件），直接在jsx文件import createMyStore from 'redux'即可。
如果需要使用middlewares，主要是编写store，[详情查看官方文档](http://cn.redux.js.org/docs/api/compose.html)

```js
export const createMyStore = function(rootReducer) {
    const reduxRouterEnhancer = reduxReactRouter({
        routes,
        createHistory,
        routerStateSelector: state => state.get('route'),
    })

    let middlewares = []
    middlewares.push(thunkMiddleware)

    if (config.debug) {
        const loggerMiddleware = createLogger({
            stateTransformer: (state) => {
                return state.toJS()
            },
        })
        middlewares.push(loggerMiddleware)
    }

    const createStoreWithMiddleware = compose(applyMiddleware(...middlewares), reduxRouterEnhancer)(createStore)
    const store = createStoreWithMiddleware(rootReducer)

    return store
}
```