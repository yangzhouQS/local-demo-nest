import {
  Controller,
  Req,
  Get,
  Request,
  Query,
  Headers,
  Session,
  IP,
  Param,
  Body,
  Post,
  Res,
  Next, Redirect, Header
} from "./@nestjs/common";
import { Request as ExpressRequest } from "express";
import { HttpCode } from "@nestjs/common/decorators/http/http-code.decorator";

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

  @Get("headers")
  handleHeaders(@Headers() headers: any, @Headers("accept") accept: string) {
    // console.log("headers", headers);
    console.log("headers->accept", accept);
    return "handleHeaders accept:" + accept;
  }

  @Get("session")
  handleSession(@Session() session: any, @Session("pageView") pageView: string) {
    if (session.pageView) {
      session.pageView++;
    } else {
      session.pageView = 1;
    }

    console.log("Session->pageView", pageView);
    return "handleSession pageView:" + session.pageView;
  }

  @Get("get-ip")
  getUserIp(@IP() ip: string) {
    console.log("getUserIp->ip", ip);
    return "getUserIp ip:" + ip;
  }


  @Get("get-param/:id/:name")
  getParams(@Param() param: any, @Param("id") id: string, @Param("name") name: string) {
    console.log("getParams->id", id);
    console.log("getParams->name", name);
    return `getParams name=${name} ; id = ${id}`;
  }

  @Post("get-body")
  getBody(@Body() body: any) {
    console.log("getBody->body", body);
    return `getBody `;
  }

  @Post("custom-response")
  customResponse(@Res() res: any, age: number) {
    console.log("customResponse->body");
    // console.log(res)

    // res.send("customResponse");
    res.json({ success: true, message: "customResponse" });
    return `customResponse `;
  }

  @HttpCode(200)
  @Post("custom-passthrough")
  customPassthrough(@Res({ passthrough: true }) res: any, age: number) {
    console.log("customPassthrough->body");

    // 只想自定义header，不想自定义body
    res.setHeader("custom-header", "customPassthrough");
    return `customPassthrough `;
  }

  @Post("custom-next-handler")
  next(@Next() next: any) {
    console.log("next->body");

    next();
    return `@Next()`;
  }

  // 请求重定向
  @Post("custom-redirect-user")
  @Redirect("http://www.baidu.com", 301)
  redirectUser() {
    console.log("redirectUser->body");

    return "redirectUser->body";
  }

  // 动态重定向
  @Get("custom-redirect-user2")
  redirectDynamic(@Query("version") version: string) {
    console.log("redirectUser->body");

    return { url: `http://www.baidu.com?version=${version}`, status: 301 };
  }

  // 动态重定向
  @Get("custom-header")
  @Header("custom-header", "customHeader")
  @Header("custom-header2", "customHeader2")
  @Header("custom-header3", "customHeader3")
  customHeader() {
    console.log("customHeader->body");
    return {
      headers: {
        "custom-header": "customHeader",
      },
    };
  }



  // 动态重定向
  @Get("custom-param-decorator")
  customParamDecorator() {
    console.log("customHeader->body");
    return "customParamDecorator";
  }
}
