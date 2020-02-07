/**
 * maongoose 配置
 */
export default {
  client: {
    url: 'mongodb://127.0.0.1/example',
    options: {
      // auth: {
      //   authSource: 'admin',
      // },
      // user: 'admin',
      // pass: '123456',
      useUnifiedTopology: true,
    },
    // // mongoose global plugins, expected a function or an array of function and options
    // plugins: [ createdPlugin, [ updatedPlugin, pluginOptions ]],
  },
};
