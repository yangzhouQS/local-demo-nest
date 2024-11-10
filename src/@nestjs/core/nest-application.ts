import {
  Express,
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction
} from "express";
import * as express from 'express';
import { Logger } from "./logger";
import { isFunction } from "lodash";
import { PATH_METADATA } from "../constants";
import * as path from "path";

export class NestApplication {
  protected isInitialized = false;
  private readonly app: Express = express();

  constructor(protected readonly module: any) {
  }

  // 配置初始化工作
  async init() {
    if (this.isInitialized) {
      return this;
    }

    Logger.log("AppModule dependencies initialized", "InstanceLoader");
    // 取出所有模块里边的控制器，路由初始化
    const controllers = Reflect.getMetadata("controllers", this.module);

    // 解析请求路径和请求处理方法
    for (const Controller of controllers) {
      // 控制器实例化
      const controller = new Controller();

      // 获取控制器前缀, 类装饰器传入的前缀
      let prefix = Reflect.getMetadata(PATH_METADATA, Controller) || "/";
      prefix = prefix.startsWith("/") ? prefix : `/${prefix}`;

      // 开始解析路由
      Logger.log(`${Controller.name} {${prefix}}: +0ms`, "RoutesResolver"); // 路由解析

      const controllerPrototype = Controller.prototype;
      for (const methodName of Object.getOwnPropertyNames(controllerPrototype)) {
        // 原型上的方法
        const method = controllerPrototype[methodName];

        // 方法绑定的请求方法
        const httpMethod = Reflect.getMetadata("method", method);

        // 函数上绑定的路径元数据
        const pathMetadata = Reflect.getMetadata("path", method);

        // 请求处理方法名不存在
        if (!httpMethod) {
          continue;
        }

        const routerPath = path.posix.join("/", prefix, pathMetadata);
        this.app[httpMethod.toLowerCase()](routerPath, (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
          const result = method.call(controller)
          res.send(result)
        });

        Logger.log(`Mapped {${routerPath}, ${httpMethod}} route`,'RouterExplorer')
      }
    }

    Logger.log("Nest application successfully started ", "NestApplication");
    this.isInitialized = true;
    return this;
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
