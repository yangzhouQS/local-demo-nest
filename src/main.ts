import { NestFactory } from "./@nestjsx/core";
import { AppModule } from "./app.module";
import * as session from "express-session";
import * as bodyParser from 'body-parser';
import {
  json as bodyParserJson,
  urlencoded as bodyParserUrlencoded,
} from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // parse application/x-www-form-urlencoded
  app.use(bodyParserUrlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParserJson())

  app.use(session({
    secret: "local-secret-key",
    resave: false, // 在每次请求时更新 session 变量
    saveUninitialized: false, // 无论 session 是否被修改，都将其保存到存储器
    cookie: {
      maxAge: 60 * 1000 * 60 * 24 // 定义会话过期时间 一天
    }
  }));

  await app.listen(3000, () => {
    console.log("http://localhost:3000");
  });
}

bootstrap();
