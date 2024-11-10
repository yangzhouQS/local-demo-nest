import "reflect-metadata";


export function Get(path = ""): MethodDecorator {
  /**
   * target: 类原型，AppController.prototype
   * propertyKey: key方法键名index
   * descriptor: index方法的属性描述符
   */
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

    // 给函数添加元数据path
    Reflect.defineMetadata("path", path, descriptor.value);

    // 给函数添加元数据请求方法method为GET
    Reflect.defineMetadata("method", "GET", descriptor.value);

    // descriptor.value.method = "GET";
  };
}
