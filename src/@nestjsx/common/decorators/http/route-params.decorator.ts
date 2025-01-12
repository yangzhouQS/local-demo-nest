export type ParamData = object | string | number;

export interface RouteParamMetadata {
  index: number;
  data?: ParamData;
}

/**
 * 创建一个路由参数装饰器工厂函数
 *
 * 根据传入的参数类型，生成一个参数装饰器，用于装饰控制器方法中的参数，以便在路由处理函数中使用。
 *
 * @param paramType 路由参数类型，用于标识装饰的参数类型
 * @returns 返回一个参数装饰器函数，该函数接受一个可选的ParamData对象作为参数
 */
function createRouteParamDecorator(paramType: string) {
  return (data?: ParamData): ParameterDecorator => {
    /**
     * target：控制器原型
     * key：处理请求的方法名
     * index：控制器参数索引
     */
    return (target, key: string, index) => {
      // console.log("createRouteParamDecorator", target.constructor, key, index);
      // const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, target.constructor, key) || {};

      // console.log("args->", args, key, index);

      // 将方法的参数信息存储在controller上
      const paramsKey = `params:${key}`;
      // console.log(`paramType=${paramType}; paramsKey = ${paramsKey}; reqMethod = {${key}}`);

      const oldValue = Reflect.getMetadata(paramsKey, target.constructor) || [];
      oldValue[index] = { parameterIndex: index, data, paramType: paramType };

      Reflect.defineMetadata(paramsKey, oldValue, target.constructor);
      const oldValue2 = Reflect.getMetadata(paramsKey, target.constructor);

      // console.log("oldValue2", oldValue2);
    };
  };
}

export const Request: () => ParameterDecorator = createRouteParamDecorator("Request");

export const Req = Request;

export const Query = createRouteParamDecorator("Query");
export const Headers = createRouteParamDecorator("Headers");
export const Session = createRouteParamDecorator("Session");
export const IP = createRouteParamDecorator("IP");
export const Param = createRouteParamDecorator("Param");
export const Body = createRouteParamDecorator("Body");
export const Response = createRouteParamDecorator("Response");
export const Res = Response;
export const Next = createRouteParamDecorator("Next");
export const HostParam = createRouteParamDecorator("HostParam");
