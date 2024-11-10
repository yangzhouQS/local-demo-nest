import { ContextUtils } from "../helpers";
import { RouteParamMetadata } from "@nestjs/common";
import { map } from "lodash";
import { IRouteParamsFactory } from "./interface/route-params-factory.interface";


export class RouterExecutionContext {
  private readonly contextUtils = new ContextUtils();

  constructor(
    private readonly paramsFactory: IRouteParamsFactory
  ) {
  }

  exchangeKeysForValues(
    keys: string[],
    metadata: Record<number, RouteParamMetadata>,
    {
      req,
      res, next
    }
  ) {
    return map(keys, (key) => {
      const { index, data, pipes: pipesCollection } = metadata[key];
      const type = this.contextUtils.mapParamType(key);

      const numericType = Number(type);

      return this.paramsFactory.exchangeKeyForValue(numericType, data, {
        req,
        res,
        next
      });
    });
  }
}
