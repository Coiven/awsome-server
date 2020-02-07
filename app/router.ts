import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 普通路由
  router.get('index', '/home/index', controller.home.index);

  // RESTful API
  // router.resources('example', '/api/v1/example', controller.api.example);

  // redirect
  router.redirect('/', '/home/index', 302);

};
