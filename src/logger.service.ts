import { Injectable } from "./@nestjsx/common";


@Injectable()
export class LoggerService {
  log(message: string) {
    console.log(`[log]message = `, message);
  }
}
