## wine_client是用vue写的前端页面

## 安装依赖包、启动和打包和正常vue项目一样分别为
```
npm install
```
npm run serve
```
npm run build
```
除去基本的前端三件套，还用到了D3.js做的流程图(酒品工艺板块最下面部分)、axios调用后端接口、swiper插件

## wine_server是用express写的后端服务

因为用到的是json格式数据，为了方便数据库就用的是mongoDB，然后
**服务我放在云服务器上启动了的(连不上那就是云服务器到期了，寄)，所以这个服务可以不用启动**
这个主要是展示一下源码和数据文件(public下的那几个json文件)
后端也没啥复杂功能(主要不怎么会后端)，就是简单传下图片和一些数据用|ू･ω･` )

## 安装依赖包和启动分别为
```
npm install
```
node app.js
