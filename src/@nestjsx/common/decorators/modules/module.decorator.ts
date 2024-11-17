import { ModuleMetadata } from "../../../common/interface/modules";
import { validateModuleKeys } from "../../../common/utils/validate-module-keys.util";

export function Module(metadata: ModuleMetadata): ClassDecorator {
  const moduleKeys = Object.keys(metadata);
  validateModuleKeys(moduleKeys);
  return (target: Function) => {
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, metadata[property], target);
      }
    }
  };
}
