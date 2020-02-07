## 路由

由于使用了egg-router-plus, 可以使路由模块化

1.  使用目录的方式，router目录下的所有文件均会自动挂载至router对象上
2.  使用namespace命名空间的形式制定路由：例如：

``` javascript
  const api_v1_router = app.router.namespace('/api/v1');
  // curl localhost:7001/sub/test
  api_v1_router.get('/test', app.controller.api.v1.test);
  api_v1_router.get('sub_upload', '/upload', app.controller.api.v1.upload);
```

⚠️ 注意： 在使用namespace时，如需使用redirct，需要使用完整路径。