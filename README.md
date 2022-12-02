# 队伍成员：计算机学院电商202 唐家伟

## wine_client是用vue写的前端页面

### 安装依赖包、启动和打包分别为
```
npm install
```
```
npm run serve
```
```
npm run build
```
除去基本的前端三件套，还用到了D3.js做的流程图(酒品工艺板块最下面部分)、axios调用后端接口、swiper插件


--------------------------------------------------------------------------------------------------


## wine_server是用express写的后端服务

因为用到的是json格式数据，为了方便数据库就用的是mongoDB，然后同时也是为了方便  
服务我放在云服务器上启动了的，所以这个服务可以不用启动(服务的ip和端口：121.40.40.218:8000)  
源码和数据文件(public下的那几个json文件) 全部都在这里  

**想本地启动看一下的话要麻烦下一个mongoDB，再建一个wine数据库  
然后在wine数据库下建立feature、factory、process、history四个集合并导入public下对应的json文件  
最后把前端wine_client中src-assets-js下的global文件中apiUrl的ip改为localhost就行    
占用的是8000端口**  

后端也没啥复杂功能，主要不怎么会后端_(:з」∠)_     
就是简单传下图片和一些数据用|ू･ω･` )  

### 安装依赖包和启动分别为
```
npm install
```
```
node app.js
```
