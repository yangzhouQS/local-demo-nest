import { PARAMTYPES_METADATA, SELF_DECLARED_DEPS_METADATA } from "@nestjsx/common/constants";
import { isUndefined } from "lodash";

/**
 * 装饰器，用于标记构造函数参数为目标，以便进行[依赖注入（DI）](https://docs.nestjs.com/providers#dependency-injection)。
 *
 * 任何注入的提供者必须在类被注入到的模块作用域（粗略地说，即包含该类的模块）内可见。这可以通过以下方式实现：
 *
 * - 在相同的模块作用域内定义提供者
 * - 从一个模块作用域导出提供者，并将该模块导入到类被注入到的模块作用域
 * - 使用`@Global()`装饰器标记的模块中导出提供者
 *
 * #### 注入令牌
 * 可以是*类型*（类名）、*字符串*或*符号*。这取决于与之关联的提供者是如何定义的。使用`@Injectable()`装饰器定义的提供者使用类名。自定义提供者可能使用字符串或符号作为注入令牌。
 *
 * @param token 要注入的提供者的查找键（分配给构造函数参数）。
 *
 * @see [提供者](https://docs.nestjs.com/providers)
 * @see [自定义提供者](https://docs.nestjs.com/fundamentals/custom-providers)
 * @see [注入作用域](https://docs.nestjs.com/fundamentals/injection-scopes)
 *
 * @publicApi
 */
export function Inject<T = any>(token?: T): PropertyDescriptor & ParameterDecorator {
  const injectCallHasArguments = arguments.length > 0;

  /**
   * 注入依赖
   *
   * @param target 目标对象
   * @param key 属性名或未定义
   * @param index 参数索引，可选
   */
  return (target: object, key: string | symbol | undefined, index?: number) => {
    let type = token || Reflect.getMetadata("design:type", target, key);
    console.log("type: ", key, index);
    if (!type && !injectCallHasArguments) {
      type = Reflect.getMetadata(PARAMTYPES_METADATA, target, key)?.[index];
    }
    if (isUndefined(index)) {
      let dependencies = Reflect.getMetadata(SELF_DECLARED_DEPS_METADATA, target) || [];

      dependencies = [...dependencies, { index, param: type }];
      Reflect.defineMetadata(SELF_DECLARED_DEPS_METADATA, dependencies, target);
      return;
    }

    const injectKey = "injectTokens";
    const existingTokens = Reflect.getOwnMetadata(injectKey, target) || [];
    existingTokens[index] = token;

    // 把数组保存在target的元数据中
    Reflect.defineMetadata(injectKey, existingTokens, target);
  };
}

