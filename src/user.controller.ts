import { Controller, Req, Get,Request } from "./@nestjs/common";
import { Request as ExpressRequest } from "express";

@Controller("users")
export class UserController {

  @Get("test-req")
  handleRequest(@Req() req: ExpressRequest, @Request() request: ExpressRequest) {
    console.log(req);
    return "handleRequest";
  }
}
