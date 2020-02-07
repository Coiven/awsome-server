/**
 * graphql 配置
 */
export default {
  router: '/graphql',
  app: true, // 是否加载到 app 上,默认为 true
  agent: false, // 是否加载到 agent 上,默认为 false
  graphiql: true, // 是否加载开发者工具 playground,默认为 true
  uploads: true, // 是否开启文件上传功能，默认开启

  // defaultEmptySchema: true,

  // 可选字段,接受项目中发生的错误,然后自定义错误返回给前端
  // formatError: (error, app) => {
  //   // console.log(error);
  //   app.logger.error(error);
  //   return error;
  // },
  debug: false, // 发生错误时,是否包含错误堆栈信息,生产环境要设置为false
};
