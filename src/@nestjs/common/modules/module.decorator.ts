import { ModuleMetadata } from "@nestjs/common/interface/modules";
import { validateModuleKeys } from "@nestjs/common/utils/validate-module-keys.util";

export function Module(metadata: ModuleMetadata): ClassDecorator {
  const moduleKeys = Object.keys(module);
  // validateModuleKeys(moduleKeys);
  return (target: Function) => {
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, metadata[property], target);
      }
    }
  };
}
