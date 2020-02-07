/**
 * redis 配置
 */
export default {
  client: {
    cluster: true,
    nodes: [{
      host: '127.0.0.1',
      port: '6379',
      family: 'user',
      password: 'password',
      db: 'db',
    }, {
      host: '127.0.0.1',
      port: '6380',
      family: 'user',
      password: 'password',
      db: 'db',
    }],
  },
};
