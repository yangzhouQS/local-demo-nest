import "reflect-metadata";
import { RequestMethod } from "@nestjs/common";
import { METHOD_METADATA, PATH_METADATA } from "@nestjs/common/constants";


function createMappingDecorator(method: string) {
  return function(path: string|string[]): MethodDecorator {
    return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
      Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
      Reflect.defineMetadata("path", path, descriptor.value);
      Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
      Reflect.defineMetadata("method", method.toLowerCase(), descriptor.value);
    };
  };
}

export function Get(path = ""): MethodDecorator {
  // console.log("path: ", path);
  /**
   * Get请求装饰器
   * @param target 类的原型 xxxController.prototype
   * @param propertyKey 被装饰的方法名称
   * @param descriptor 方法的属性描述器
   */
  return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {

    // 给函数添加元数据 path
    Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
    Reflect.defineMetadata("path", path, descriptor.value);

    // 给函数添加元数据请求方法method为GET
    // console.log('RequestMethod.GET: ',RequestMethod.GET);
    Reflect.defineMetadata(METHOD_METADATA, RequestMethod.GET, descriptor.value);
    Reflect.defineMetadata("method", "get", descriptor.value);

    // descriptor.value.path = path;
    // descriptor.value.method = "GET";

    return descriptor;
  };
}


export const Post = createMappingDecorator("POST");
export const Put = createMappingDecorator("PUT");
