// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNotfoundHandler from '../../../app/middleware/notfound_handler';
import ExportUuid from '../../../app/middleware/uuid';

declare module 'egg' {
  interface IMiddleware {
    notfoundHandler: typeof ExportNotfoundHandler;
    uuid: typeof ExportUuid;
  }
}
