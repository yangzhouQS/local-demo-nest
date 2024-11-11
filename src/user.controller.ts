import { Controller, Req, Get, Request, Query } from "./@nestjs/common";
import { Request as ExpressRequest } from "express";

@Controller("users")
export class UserController {

  @Get("test-req")
  handleRequest(@Req() req: ExpressRequest, age: number, @Request() request: ExpressRequest) {
    console.log("handleRequest->age:", age);
    console.log("handleRequest->req:", req.path);
    console.log("handleRequest->request:", request.url);
    console.log("handleRequest->method:", request.method);
    return "handleRequest";
  }

  @Get("query")
  handleQuery(@Query() query: any, @Query("id") id: string) {
    console.log("query", query);
    console.log("query->id", id);
    return "handleQuery id:" + query.id;
  }
}
