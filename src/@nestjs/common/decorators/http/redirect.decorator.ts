import { REDIRECT_METADATA } from "@nestjs/common/constants";


/**
 * 将请求重定向到指定的 URL。
 * 元数据设置在了方法上
 * @param url 要重定向到的 URL。默认为空字符串。
 * @param statusCode 重定向的状态码。可选参数，默认为 302。
 * @returns 返回一个方法装饰器，用于将请求重定向到指定的 URL。
 *
 * @publicApi
 */
export function Redirect(url = '', statusCode?: number):MethodDecorator {


  /**
   * 为目标对象的方法添加重定向功能
   *
   * @param target 目标对象
   * @param key 方法名
   * @param descriptor 属性描述符
   * @returns 属性描述符
   */
  return function (target: any, key: string | symbol,descriptor:TypedPropertyDescriptor<any>) {
    Reflect.defineMetadata(REDIRECT_METADATA, {url, statusCode}, descriptor.value);

    // 返回属性描述符
    return descriptor
  };
}
