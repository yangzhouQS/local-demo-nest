import { INJECTABLE_WATERMARK, SCOPE_OPTIONS_METADATA } from "../../../common/constants";
import { ScopeOptions, Type } from "../../../common";
import { uid } from 'uid';
export type InjectableOptions = ScopeOptions;

export function Injectable(options?: InjectableOptions): ClassDecorator {
  return function(target: Function) {
    Reflect.defineMetadata(INJECTABLE_WATERMARK, true, target);
    Reflect.defineMetadata(SCOPE_OPTIONS_METADATA, options, target);
  };
}


export function mixin<T>(mixinClass: Type<T>) {
  Object.defineProperty(mixinClass, "name", {
    value: uid(21)
  });
  Injectable()(mixinClass);
  return mixinClass;
}
