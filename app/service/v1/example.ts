import { Service } from 'egg';

/**
 * Example Service
 */
export default class Example extends Service {

  /**
   * handler
   * @param method - your method
   */
  public async handler(method: string) {
    return `hi, ${method}`;
  }
}
