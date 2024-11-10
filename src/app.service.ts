import { Injectable } from './@nestjs/common';
import { formatDate } from './utils/helper';

@Injectable()
export class AppService {
  getHello(): string {
    return `当前时间：${formatDate()}`;
  }

  extensionsApi(): string {
    return `当前时间：${formatDate()}`;
  }

  constructor() {
    console.log('AppService');
  }
}
