import "reflect-metadata";
import { METHOD_METADATA, PATH_METADATA } from "../../../common/constants";


function createMappingDecorator(method: string) {

  /**
   * @param path 路由地址, 可以是数组
   */
  return function(path?: string | string[]): MethodDecorator {
    return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
      if (!path) {
        path = "/";
      }
      if (!method) {
        method = "GET";
      }
      // console.log("method -->", method, path);
      Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
      Reflect.defineMetadata("path", path, descriptor.value);
      Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
      Reflect.defineMetadata("method", method.toLowerCase(), descriptor.value);
    };
  };
}

/*

export function Get(path = ""): MethodDecorator {
  // console.log("path: ", path);
  /!**
   * Get请求装饰器
   * @param target 类的原型 xxxController.prototype
   * @param propertyKey 被装饰的方法名称
   * @param descriptor 方法的属性描述器
   *!/
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
*/


export const Post = createMappingDecorator("POST");
export const Get = createMappingDecorator("Get");
export const Delete = createMappingDecorator("Delete");
export const Put = createMappingDecorator("PUT");
export const Patch = createMappingDecorator("Patch");
export const Options = createMappingDecorator("Options");
export const Head = createMappingDecorator("Head");
export const All = createMappingDecorator("All");
export const Search = createMappingDecorator("Search");
