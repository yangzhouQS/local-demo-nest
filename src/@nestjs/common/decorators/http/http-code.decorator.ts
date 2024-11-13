import { HTTP_CODE_METADATA } from "@nestjs/common/constants";

/**
 * HttpCode 装饰器
 *
 * 用于为指定的方法定义元数据，标识HTTP状态码
 *
 * @param statusCode HTTP状态码
 * @returns 方法装饰器
 */
export function HttpCode(statusCode: number): MethodDecorator {
  /**
   * 为指定的属性定义元数据，标识HTTP状态码
   *
   * @param target 目标对象
   * @param propertyKey 属性名
   * @param descriptor 属性描述符
   * @returns 返回修改后的属性描述符
   */
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    Reflect.defineMetadata(HTTP_CODE_METADATA, statusCode, descriptor.value);

    return descriptor;
  };
}
