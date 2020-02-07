import { Context } from 'egg';

export default function notFoundHandler() {
  return async (_ctx: Context, next: () => Promise<any>) => {
    await next();
    if (_ctx.status === 404 && !_ctx.body) {
      if (_ctx.acceptJSON) {
        _ctx.body = { error: 'Not Found' };
      } else {
        _ctx.body = '<h1>Page Not Found</h1>';
      }
    }
  };
}
