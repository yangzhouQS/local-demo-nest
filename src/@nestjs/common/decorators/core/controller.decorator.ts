import "reflect-metadata";
import { VersionOptions } from "../../interface";
import {
  CONTROLLER_WATERMARK,
  HOST_METADATA,
  PATH_METADATA,
  SCOPE_OPTIONS_METADATA,
  VERSION_METADATA
} from "../../../constants";
import { ScopeOptions } from "../../interface";
import { isString, isUndefined } from "lodash";

export interface ControllerOptions extends ScopeOptions, VersionOptions {
  path?: string | string[];
  host?: string | RegExp | Array<string | RegExp>;
  prefix?: string | string[];
}

export function Controller(): ClassDecorator;

export function Controller(prefix: string | string[]): ClassDecorator;
export function Controller(options: ControllerOptions): ClassDecorator;


export function Controller(prefixOrOptions?: string | string[] | ControllerOptions): ClassDecorator {

  const defaultPath = "/";

  const [path, host, scopeOptions, versionOptions] = isUndefined(prefixOrOptions) ?
    [defaultPath, undefined, undefined, undefined]
    : isString(prefixOrOptions) || Array.isArray(prefixOrOptions) ?
      [prefixOrOptions, undefined, undefined, undefined] : [
        prefixOrOptions.path || defaultPath,
        prefixOrOptions.host,
        { scope: prefixOrOptions.scope, durable: prefixOrOptions.durable },
        Array.isArray(prefixOrOptions.version) ? Array.from(new Set(prefixOrOptions.version)) : prefixOrOptions.version
      ];
  // target 被装饰的类
  return (target: Function) => {
    // 控制器标识
    Reflect.defineMetadata(CONTROLLER_WATERMARK, true, target);

    // path 元数据
    Reflect.defineMetadata(PATH_METADATA, path, target);

    // prefix元数据
    Reflect.defineMetadata("prefix", defaultPath, target);

    // host元数据
    Reflect.defineMetadata(HOST_METADATA, host, target);

    // scope元数据
    Reflect.defineMetadata(SCOPE_OPTIONS_METADATA, scopeOptions, target);

    // 版本元数据
    Reflect.defineMetadata(VERSION_METADATA, versionOptions, target);
  };
}
