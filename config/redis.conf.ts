/**
 * redis 配置
 */
export default {
  client: {
    port: 6379, // Redis port
    host: '127.0.0.1', // Redis host
    password: 'test',
    db: 0,
    weakDependent: true, // this redis instance won't block app start
  },
};
