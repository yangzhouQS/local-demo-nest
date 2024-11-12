import {
  Express,
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction
} from "express";
import * as express from "express";
import { Logger } from "./logger";
import { filter, find, isFunction, map, sortBy } from "lodash";
import * as path from "path";
import { MESSAGES } from "@nestjs/core/constants";
import { METHOD_METADATA, PATH_METADATA, ROUTE_ARGS_METADATA } from "@nestjs/common/constants";
import { RouterExecutionContext } from "./router/router-execution-context";
import { RouteParamsFactory } from "./router/route-params-factory";
import { Headers } from "@nestjs/common";

export class NestApplication {
  protected isInitialized = false;
  private readonly app: Express = express();

  constructor(protected readonly module: any) {
  }

  use(...args: [any, any?]): this {
    this.app.use(...args);
    return this;
  }

  // 配置初始化工作
  async init() {
    if (this.isInitialized) {
      return this;
    }

    Logger.log(`${this.module.name} - AppModule dependencies initialized`, "InstanceLoader");
    // console.log("this.module", this.module);
    // 取出所有模块里边的控制器，路由初始化
    const controllers = Reflect.getMetadata("controllers", this.module);

    console.log("app controllers", controllers);
    // 解析请求路径和请求处理方法
    for (const Controller of controllers) {
      // 控制器实例化
      const controller = new Controller();

      // 获取控制器前缀, 类装饰器传入的前缀
      let prefix = Reflect.getMetadata(PATH_METADATA, Controller) || "/";
      prefix = prefix.startsWith("/") ? prefix : `/${prefix}`;

      // 开始解析路由
      Logger.log(`${Controller.name} {${prefix}}:`, "RoutesResolver"); // 路由解析

      const controllerPrototype = Controller.prototype;
      for (const methodName of Object.getOwnPropertyNames(controllerPrototype)) {
        // 原型上的方法
        const method = controllerPrototype[methodName];

        // 方法元数据的请求方法
        const httpMethod = Reflect.getMetadata(METHOD_METADATA, method);

        // 函数上绑定的路径元数据
        const pathMetadata = Reflect.getMetadata(PATH_METADATA, method);

        // console.log(`httpMethod = ${httpMethod}; pathMetadata = ${pathMetadata}`, controller);

        // 请求处理方法名不存在
        if (!httpMethod) {
          continue;
        }

        // 完整路径
        const routerPath = path.posix.join("/", prefix, pathMetadata);

        // 配置路由,请求路径对应的处理方法,响应内容
        this.app[httpMethod.toLowerCase()](routerPath, (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
          const args = this.resolveParams(controller, methodName, req, res, next);

          // 执行路由处理函数,获取返回值
          const result = method.call(controller, ...args);

          const resMetadata = this.getCustomResMetadata(controller.constructor, methodName);
          if (!resMetadata || resMetadata?.data?.passthrough === true) {
            // 把返回值序列化后发送给客户端
            res.send(result);
          }
        });

        Logger.log(`Mapped {${routerPath}, ${httpMethod}} route`, "RouterExplorer");
      }
    }

    // Logger.log("Nest application successfully started ", "NestApplication");

    await this.registerModules();
    await this.registerRouter();
    await this.callInitHook();
    await this.registerRouterHooks();
    await this.callBootstrapHook();

    this.isInitialized = true;
    Logger.log(MESSAGES.APPLICATION_READY, "NestApplication");
    return this;
  }

  /**
   * 解析路由方法参数
   * @param instance 路由付费
   * @param methodName 路由请求方法
   * @param req 请求对象
   * @param res 响应对象
   * @param next
   * @private
   */
  private resolveParams<
    TRequest extends Record<string, any> = any,
    TResponse = any,
  >(instance: any, methodName: string, req: TRequest, res: TResponse, next: Function) {

    const paramsKey = `params:${methodName}`;
    const paramsMetadata = Reflect.getMetadata(paramsKey, instance.constructor) || [];
    // console.log("paramsMetadata", paramsMetadata);
    return map(paramsMetadata, (parameMetada: any) => {
      const { paramType, data } = parameMetada || {};
      switch (paramType) {
        case "Request":
        case "Req":
          return req;
        case "Query":
          return data ? req.query[data] : req.query;
        case "Headers":
          return data ? req.headers[data] : req.headers;
        case "Session":
          return data ? req.session[data] : req.session;
        case "IP":
          return req.ip;
        case "Param":
          return data ? req.params[data] : req.params;
        case "Body":
          return data && req.body ? req.body[data] : req.body;
        case "Response":
        case "Res":
          return res as any;
        case "Next":
          return next as any;
        case "HostParam":
          return req.hosts as any;
        default:
          return null;
      }
    });
  }

  private getCustomResMetadata(instance: any, methodName: string) {
    const key = `params:${methodName}`;
    const paramsMetadata = Reflect.getMetadata(key, instance);
    return find(paramsMetadata, (param: any) => ["Response", "Res"].includes(param?.paramType));
  }

  public async registerModules() {
    /*await this.registerModules();*/
  }

  public registerParserMiddleware() {
    /*const prefix = this.config.getGlobalPrefix();
    const rawBody = !!this.appOptions?.rawBody;
    this.httpAdapter.registerParserMiddleware(prefix, rawBody);*/
  }

  public async registerRouter() {
    /*await this.registerMiddleware(this.httpAdapter);

    const prefix = this.config.getGlobalPrefix();
    const basePath = addLeadingSlash(prefix);
    this.routesResolver.resolve(this.httpAdapter, basePath);*/
  }

  public async callInitHook() {
    /*await this.callInitHook();*/
  }

  public async registerRouterHooks() {
    /*this.routesResolver.registerNotFoundHandler();
    this.routesResolver.registerExceptionHandler();*/
  }

  /**
   * Calls the `onApplicationBootstrap` function on the registered
   * modules and its children.
   */
  protected async callBootstrapHook(): Promise<void> {
    /*const modulesSortedByDistance = this.getModulesToTriggerHooksOn();
    for (const module of modulesSortedByDistance) {
      await callModuleBootstrapHook(module);
    }*/
  }

  /**
   * Calls the `onApplicationShutdown` function on the registered
   * modules and children.
   */
  protected async callShutdownHook(signal?: string): Promise<void> {
    /*const modulesSortedByDistance = this.getModulesToTriggerHooksOn();
    for (const module of modulesSortedByDistance) {
      await callAppShutdownHook(module, signal);
    }*/
  }

  public async listen(port: number | string): Promise<any>;
  public async listen(port: number | string, hostname: string): Promise<any>;
  public async listen(port: number | string, ...args: any[]): Promise<any>;
  public async listen(port: number | string, ...args: any[]): Promise<any> {
    await this.init();
    const isCallbackInOriginalArgs = isFunction(args[args.length - 1]);
    this.app.listen((port), () => {
      Logger.log(`Application is running on http://localhost:${port}`, "NestApplication");
    });


    if (isCallbackInOriginalArgs) {
      args[args.length - 1](1, 2, 3);
    }
    return new Promise((resolve, reject) => {

    });
  }
}
