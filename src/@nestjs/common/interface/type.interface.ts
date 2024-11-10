/**
 * 一个泛型接口，用于定义构造函数类型
 *
 * @template T 构造函数的返回类型，默认为any
 */
export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}
