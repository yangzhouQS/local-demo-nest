import { Type } from "../../interface/type.interface";
import { RouteParamtypes } from "../../enums/route-paramtypes.enum";
import { ROUTE_ARGS_METADATA } from "@nestjs/common/constants";


export type ParamData = object | string | number;

export interface RouteParamMetadata {
  index: number;
  data?: ParamData;
}

export function assignMetadata<TParamtype = any, TArgs = any>(
  args: TArgs,
  paramtype: TParamtype,
  index: number,
  data?: ParamData,
  ...pipes: (Type<any> | any)[]
) {
  return {
    ...args,
    [`${paramtype}:${index}`]: {
      index,
      data,
      pipes
    }
  };
}

function createRouteParamDecorator(paramType: RouteParamtypes) {
  return (data?: ParamData): ParameterDecorator => {
    /**
     * target：控制器原型
     * key：方法名
     * index：控制器参数索引
     */
    return (target, key, index) => {
      console.log(target, key, index);
      const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, target.constructor, key) || {};

      console.log("args", args);
      Reflect.defineMetadata(ROUTE_ARGS_METADATA, assignMetadata<RouteParamtypes, Record<number, RouteParamMetadata>>(
        args,
        paramType,
        index,
        data
      ), target.constructor, key);

      const args2 = Reflect.getMetadata(ROUTE_ARGS_METADATA, target.constructor, key);
      console.log("args2", args2);
    };
  };
}

export const Request: () => ParameterDecorator = createRouteParamDecorator(RouteParamtypes.REQUEST);

export const Req = Request;


/*
export function Get(path = ""): MethodDecorator {

  /!**
   * Get请求装饰器
   * @param target 类的原型 xxxController.prototype
   * @param propertyKey 被装饰的方法名称
   * @param descriptor 方法的属性描述器
   *!/
  return (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor) => {

  };
}
*/
