import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import graphqlConf from './graphql.conf';
import mongoConf from './mongo.conf';
import redisConf from './redis.conf';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580957987508_5780';

  // add your egg config in here
  config.middleware = [
    'graphql',
    'uuid',
    'notfoundHandler',
  ];

  config.security = {
    csrf: {
      ignore: () => true,
    },
  };

  // mongoose 配置
  config.mongoose = mongoConf;

  // graphql 配置
  config.graphql = graphqlConf;

  // graphql 配置
  config.redis = redisConf;

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    uuid: {
      name: 'ebuuid',
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
