import { NestApplication } from "./nest-application";
import { Logger } from "./logger";

export class NestFactory {
  static async create(module: any) {
    // 启动nest应用日志
    Logger.log(`Starting Nest application...`, "NestFactory");

    const app = new NestApplication(module);

    // 返回nest应用实例
    return app;
  }
}
