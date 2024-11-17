import "reflect-metadata";

// 模块的元数据
interface ModuleMetadata {
  controllers: Function[];
  providers: Function[];
}

export function Module(metadata: ModuleMetadata): ClassDecorator {
  console.log(metadata);
  return (target: Function) => {

    // 给模块添加元数据，AppModule,元数据的名字叫controllers,值是controllers数组[AppControllers]
    Reflect.defineMetadata("controllers", metadata.controllers, target);
    Reflect.defineMetadata("providers", metadata.providers, target);
  };
}
