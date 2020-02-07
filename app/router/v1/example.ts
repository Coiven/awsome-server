import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  const api_v1_router = router.namespace('/api/v1');
  // curl localhost:7001/api/v1/example
  api_v1_router.resources('example', '/example', controller.v1.example);
};
