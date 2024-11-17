import { Controller, Get, Inject } from "./@nestjsx/common";
import { LoggerService } from "./logger.service";

@Controller()
export class AppController {
  constructor(
    @Inject(LoggerService)
    private readonly loggerService: LoggerService,
  ) {
  }

  @Get()
  index(): string {
    this.loggerService.log("index");
    return "home";
  }

  @Get("/hello")
  getHello(): string {
    return "hello";
  }
}
