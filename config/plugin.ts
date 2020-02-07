import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // // 静态资源插件
  // static: true,

  // // nunjucks SSR渲染插件
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  // grapql 插件
  'apollo-server': {
    enable: true,
    package: 'egg-apollo-server',
  },

  // mongoose 插件
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },

  // 请求校验插件
  validate: {
    package: 'egg-validate',
  },

  // router 模块化插件
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
};

export default plugin;
