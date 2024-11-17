import * as clc from "cli-color";

export class Logger {
  private static lastLogTime = Date.now();

  static log(message: string, context: string = "Nest") {
    // 获取当前时间戳
    const timestamp = new Date().toLocaleString();
    // 获取当前进程ID
    const pid = process.pid;

    const currentTime = Date.now();
    const timeDiff = `${clc.yellow("+" + (currentTime - this.lastLogTime) + "ms")}`;

    const ctx = clc.green(context);
    console.log(`[${clc.green("Local Nest")}] ${clc.green(pid.toString())} - ${clc.yellow(timestamp)} ${clc.green("LOG")} [${ctx}] - ${clc.green(message)} ${timeDiff}`);

    this.lastLogTime = currentTime;
  }

}
