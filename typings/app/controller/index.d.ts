// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/controller/auth';
import ExportHome from '../../../app/controller/home';
import ExportV1Example from '../../../app/controller/v1/example';

declare module 'egg' {
  interface IController {
    auth: ExportAuth;
    home: ExportHome;
    v1: {
      example: ExportV1Example;
    }
  }
}
