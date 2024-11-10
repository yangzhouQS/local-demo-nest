import { Controller, Get } from "./@nestjs/common";

@Controller()
export class AppController {
  constructor() {
  }

  @Get()
  index(): string {
    return "home";
  }

  @Get("/hello")
  getHello(): string {
    return "hello";
  }
}
