import { Service } from 'egg';

/**
 * Test Service
 */
export default class User extends Service {

  public async findById(name: string) {
    const user = this.ctx.model.User;
    const result = await user.findOne({ name });
    return result;
  }
}
