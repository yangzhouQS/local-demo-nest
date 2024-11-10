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
    [`${paramtype}:${index}`]: { // 'request:0':{index,data,pipes}
      index,
      data,
      pipes
    }
  };
}

/**
 * 创建一个路由参数装饰器工厂函数
 *
 * 根据传入的参数类型，生成一个参数装饰器，用于装饰控制器方法中的参数，以便在路由处理函数中使用。
 *
 * @param paramType 路由参数类型，用于标识装饰的参数类型
 * @returns 返回一个参数装饰器函数，该函数接受一个可选的ParamData对象作为参数
 */
function createRouteParamDecorator(paramType: RouteParamtypes) {
  return (data?: ParamData): ParameterDecorator => {
    /**
     * target：控制器原型
     * key：方法名
     * index：控制器参数索引
     */
    return (target, key, index) => {
      // console.log("createRouteParamDecorator", target.constructor, key, index);
      const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, target.constructor, key) || {};

      // console.log("args->", args, key, index);

      // 将方法的参数信息存储在controller上
      Reflect.defineMetadata(
        ROUTE_ARGS_METADATA,
        assignMetadata<RouteParamtypes, Record<number, RouteParamMetadata>>(
          args,
          paramType,
          index,
          data
        ),
        target.constructor,
        key
      );

      const args2 = Reflect.getMetadata(ROUTE_ARGS_METADATA, target.constructor, key);
      console.log(data, "args2", args2, target.constructor, key, index);
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
