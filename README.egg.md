# 改造服务器渲染留存

### 改造计划

  - 先了解vue打包的dist结构，看是否需要单/多页面改造

    mobile-h5的结构是，在打包的时候，设置资源的相对路径（相对服务器public等等），然后打包成tpl文件，这样返回直接返回该tpl文件就行了。

  - 了解egg-template相关插件
  - 更新服务器代码 + 静态文件的方式


### 解决端口占用

  - sudo lsof -i:port
  - kill portPid