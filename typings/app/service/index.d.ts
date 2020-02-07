// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/service/Home';
import ExportUser from '../../../app/service/User';
import ExportV1Example from '../../../app/service/v1/example';

declare module 'egg' {
  interface IService {
    home: ExportHome;
    user: ExportUser;
    v1: {
      example: ExportV1Example;
    }
  }
}
