import { isFunction, isNil, uniqueId } from "lodash";
import { ROUTE_ARGS_METADATA } from "@nestjs/common/constants";
import { CustomParamFactory } from "@nestjs/common/interface/custom-route-param-factory.interface";

export type ParamDecoratorEnhancer = ParameterDecorator;

export function createParamMetadata<
  FactoryData = any,
  FactoryInput = any,
  FactoryOutput = any,
>(
  factory: CustomParamFactory<FactoryData, FactoryInput, FactoryOutput>,
  enhancers: ParamDecoratorEnhancer[] = []
): (
  ...dataOrPipes: FactoryData[]
) => ParameterDecorator {
  const paramtype = uniqueId("paramtype");
  return function(data?, ...pipes: FactoryData[]): ParameterDecorator {
    return function(target: Object, propertyKey: string | symbol, index: number) {

      /**
       * 判断是否为管道
       * @param pipe
       */
      const isPipe = (pipe: any) => {
        return pipe && (isFunction(pipe) && pipe.prototype && isFunction(pipe.prototype.transform)) || isFunction(pipe.transform);
      };

      // 获取其他装饰器参数
      const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, target.constructor, propertyKey) || {};

      // 判断是否为参数装饰器
      const hasParamData = isNil(data) || !isPipe(data);
      const paramData = hasParamData ? data : undefined;
      const paramPipes = hasParamData ? pipes : [data, ...pipes];
      const metadata: any = {
        ...args,
        index,
        paramtype: paramtype,
        factory,
        data: paramData,
        pipes: paramPipes.filter((pipe) => isPipe(pipe))
      };
      Reflect.defineMetadata(ROUTE_ARGS_METADATA, metadata, target);

      enhancers.forEach(fn => fn(target, propertyKey, index));
    };
  };
}
