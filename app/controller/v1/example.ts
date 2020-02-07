import { Controller } from 'egg';

export default class ExampleController extends Controller {
  /**
   * index
   * get 请求
   */
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.v1.example.handler('get');
  }

  /**
   * create
   * post 请求
   */
  public async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.v1.example.handler('post');
  }

  /**
   * update
   * put 请求
   */
  public async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.v1.example.handler('put');
  }

  /**
   * destroy
   * delete 请求
   */
  public async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.v1.example.handler('delete');
  }
}
