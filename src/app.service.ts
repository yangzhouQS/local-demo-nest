import { Inject, Injectable } from "./@nestjsx/common";
import { formatDate } from './utils/helper';
import { LoggerService } from "./logger.service";

@Injectable()
export class AppService {
  constructor(
    @Inject(LoggerService)
    private readonly logService: LoggerService,
  ) {
  }
  getHello(): string {
    return `当前时间：${formatDate()}`;
  }

  extensionsApi(): string {
    return `当前时间：${formatDate()}`;
  }
}
