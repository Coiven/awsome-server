export default {
  onerror: {
    all(_err, _ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      _ctx.body = 'error';
      _ctx.status = 500;
    },
    html(_err, _ctx) {
      // html hander
      _ctx.body = '<h3>error</h3>';
      _ctx.status = 500;
    },
    json(_err, _ctx) {
      // json hander
      _ctx.body = { message: 'error' };
      _ctx.status = 500;
    },
    jsonp(_err, _ctx) {
      // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    },
  },
};
