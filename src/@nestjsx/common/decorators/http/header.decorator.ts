import { HEADERS_METADATA } from "../../../common/constants";

/**
 * 请求方法装饰器。用于设置响应头。
 *
 * 例如：
 * `@Header('Cache-Control', 'none')`
 * `@Header('Cache-Control', () => 'none')`
 *
 * @param name 用于头名称的字符串
 * @param value 用于头值的字符串或返回字符串的函数
 *
 * @see [Headers](https://docs.nestjs.com/controllers#headers)
 *
 * @publicApi
 */
export function Header(name: string, value: string | (() => string)): MethodDecorator {
  /**
   * 一个通用的装饰器函数
   *
   * @param target 被装饰的目标对象
   * @param key 目标对象的属性名或方法名
   * @param descriptor 目标对象属性或方法的属性描述符
   * @returns 返回修改后的属性描述符
   */
  return function(
    target: object,
    key: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    const oldValue = Reflect.getMetadata(HEADERS_METADATA,descriptor.value) || [];
    const newValue = [...oldValue, { name, value }];
    Reflect.defineMetadata(HEADERS_METADATA, newValue, descriptor.value);
    return descriptor;
  };
}
