import { Context, EggAppConfig, Application } from 'egg';

/**
 * uuid
 * @param _options config 中uuid下的属性
 * @param _app
 */

export default function uuidMiddleWare(_options: EggAppConfig['uuid'], _app: Application): any {
  return async (_ctx: Context, next: () => Promise<any>) => {
    return next();
  };
}
