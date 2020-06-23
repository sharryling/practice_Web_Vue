# vue-music_box

> 音乐盒

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# Tools
## jsonp爬虫
src/common/js/jsonp.js 封装了统一的jonsp方法
### 第一种简单方法
+ eg：[爬 m.jd.com的数据] 
- url: https://wq.jd.com/bases/searchpromptwords/searchpromptwords?_=1590851731507&sceneval=2&callback=jsonpCBKA
- user: components/HelloWorld.vue -> api/jd.m.js -> common/js/jsonp.js
### 第二种-需要修改http头信息的爬虫
+ eg: jd.m.js中的requestBefore方法 -> webpack.dev.conf.js中的【L54-74】中注释部分利用node后台代理接口的方式，启动了axios发送请求，来修改头部信息。


## 轮播图
使用了https://github.com/surmon-china/vue-awesome-swiper


## 目录规范
公共参数 可放在： api.config.js
基础组件 可放在： base/xxx/xxx.vue xxx.js等，如轮播图,本项目没写完【但基础组件的开发在工作中一般是开发成npm包直接用】


## eslint 规范
npm run lint // 检查规范
npm run lint-fix // 自动修正   **但是对vue没起作用?


## 启动后台数据模拟
在webpack.dev.conf.js中【L47-67】： 启动后台数据模拟
                       

## better-scroll：移动端滚动组件
use: base/scroll
- 需要有内容才

## Vuex的使用
- state
- getters
- mutations
- actions
- modules
- mapXXX
+ eg: HelloWold进行了两种方法的显示（state,getter），Singer.vue进行了两种方式的方法(mutations, actions)

## 封装api
### jsonp
### axios
+ eg: api/helper.js里面的get方法，api/index.js中对get(url)进行了引用

# mentions:
1.  setTimeout(() => { xxxx  }, 20)  为什么要20ms
    为了保证dom成功渲染，通常会在mounted函数中加个延时函数，由于浏览器刷新的时间一般为17ms一次，因此把setTimeout的值设置为17ms之后，即20ms，例如在需要获取内容宽高的场景。