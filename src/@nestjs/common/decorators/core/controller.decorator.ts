import "reflect-metadata";
import type { VersionOptions,ScopeOptions } from "@nestjs/common";
import {
  CONTROLLER_WATERMARK,
  HOST_METADATA,
  PATH_METADATA,
  SCOPE_OPTIONS_METADATA,
  VERSION_METADATA
} from "../../constants";
import { isString, isUndefined } from "lodash";

export interface ControllerOptions extends ScopeOptions, VersionOptions {
  path?: string | string[];
  host?: string | RegExp | Array<string | RegExp>;
  prefix?: string | string[];
}

/**
 * 控制器装饰器
 *
 * 用于将一个类标记为控制器类，使得该类可以被路由识别和处理请求。
 *
 * @returns 一个类装饰器，用于标记一个类为控制器类。
 */
export function Controller(): ClassDecorator;

export function Controller(
  // 参数 prefix 可以是字符串或字符串数组
  prefix: string | string[]
): ClassDecorator;

/**
 * 控制器装饰器
 *
 * 将一个类标记为控制器类，并允许通过options参数配置控制器的相关属性。
 *
 * @param options 控制器选项配置对象
 * @returns 一个类装饰器，用于标记一个类为控制器类
 */
export function Controller(options: ControllerOptions): ClassDecorator;


/**
 * 控制器装饰器
 *
 * 将一个类标记为控制器类，并允许通过参数配置控制器的相关属性。
 *
 * @param prefixOrOptions 控制器前缀或配置对象。
 *     - 可以是字符串或字符串数组，表示控制器的路径前缀。
 *     - 也可以是ControllerOptions对象，包含以下可选属性：
 *         - path: 控制器路径前缀，默认为"/"。
 *         - host: 控制器的主机名。
 *         - scope: 控制器的作用域（可选）。
 *         - durable: 是否持久化控制器（可选）。
 *         - version: 控制器的版本数组（可选）。
 * @returns 一个类装饰器，用于标记一个类为控制器类。
 */
export function Controller(prefixOrOptions?: string | string[] | ControllerOptions): ClassDecorator {

  const defaultPath = "/";

  const [
    path,
    host,
    scopeOptions,
    versionOptions
  ] = isUndefined(prefixOrOptions) ?
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
