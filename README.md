
## 控制器

### Next
警告
Nest 会检测处理程序何时使用 @Res() 或 @Next()，这表明你已选择特定于库的选项。如果同时使用两种方法，则该单一路由的标准方法将自动禁用，并且将不再按预期工作。
要同时使用这两种方法（例如，通过注入响应对象来仅设置 cookies/headers，但仍将其余部分留给框架），你必须在 @Res({ passthrough: true }) 装饰器中将 passthrough 选项设置为 true。

### Redirect

要将响应重定向到特定 URL，你可以使用 @Redirect() 装饰器或库特定的响应对象（并直接调用 res.redirect()）。

@Redirect() 有两个参数，url 和 statusCode，两者都是可选的。如果省略，statusCode 的默认值为 302 (Found)。

```ts
  @Post("custom-redirect-user")
  @Redirect("http://www.baidu.com", 301)
  redirectUser(){
    console.log("redirectUser->body");

    return 'redirectUser->body';
  }
```

> 动态重定向
```ts
  // (元数据在方法上)重定向元数据获取
  const { url:redirectUrl, statusCode:redirectStatusCode } =  Reflect.getMetadata(REDIRECT_METADATA, method)||{}

  // 返回结果动态重定向
  if (result.url){
    return res.redirect(result.statusCode || 302, result.url);
  }

  // 判断是否需要重定向
  if (redirectUrl){
    return res.redirect(redirectStatusCode || 302, redirectUrl);
  }
```

### 自定义路由装饰器



## SOLID原则是面向对象设计（Object-Oriented Design）中的五个基本原则，它们分别是：
> 单一职责原则 (Single Responsibility Principle, SRP)

一个类应该只有一个变化的原因。
类的职责应该被明确且单一，以提高类的可读性和可维护性。

> 开闭原则 (Open/Closed Principle, OCP)

软件实体（类、模块、函数）应该对扩展开放，对修改关闭。
这意味着软件应该通过添加新功能来适应变化，而不是通过修改现有的代码。

> 里氏替换原则 (Liskov Substitution Principle, LSP)

子类必须能够替换其基类的任何对象，并且替换后程序的行为不变。
这确保了软件的可维护性、可扩展性和健壮性。

> 接口隔离原则 (Interface Segregation Principle, ISP)

客户端不应该依赖于它不需要的接口。
接口应该被细化，以满足客户端的特定需求，而不是向客户端暴露过多的功能。

> 依赖倒置原则 (Dependency Inversion Principle, DIP)

依赖倒置原则要求高层模块不应该依赖于低层模块，它们都应该依赖于抽象。
抽象不应该依赖于细节，细节应该依赖于抽象。
这些原则的目的是为了创建更加灵活、可维护、可扩展和可重用的软件系统。在设计和实现时，应该充分考虑这些原则，以确保软件的质量和可维护性。

### 1. 单一职责原则
单一职责原则（Single Responsibility Principle，SRP）是面向对象设计中的一个核心原则。该原则规定，一个类应该只有一个发生变化的原因，即一个类应该只负责一项职责。这一原则的目的是降低类的复杂度，提高类的可读性、可维护性和系统的可扩展性、灵活性。当类的职责被明确划分且单一时，代码结构更加清晰，更易于理解和修改。

遵循单一职责原则的优点包括：

降低类的复杂度：每个类只关注一个特定的功能或行为，使得类的逻辑更加简单，易于理解和维护。

提高可读性：由于类的职责明确且单一，其他开发者在阅读代码时能够更容易地理解每个类的功能和作用。

提高可维护性：当需要修改或扩展某个功能时，可以精确地定位到相关的类，而无需担心对其他功能产生影响。这降低了维护成本和出错概率。

提高系统的可扩展性和灵活性：遵循单一职责原则的类更加通用和灵活，可以在不同的上下文和场景中被重用和扩展。

为了实现单一职责原则，设计人员需要仔细分析类的职责，并将其拆分为多个独立的类（如果必要），每个类只负责一项明确的职责。同时，也需要注意避免过度设计，以免增加系统的复杂性和维护难度。

总的来说，单一职责原则是面向对象设计中一个重要且实用的原则，有助于提高软件的质量和可维护性。

### 2. 开闭原则
开闭原则（Open-Closed Principle，OCP）是面向对象设计中的一条基本原则。以下是关于开闭原则的详细解释：
通过扩展已有的diamante来实现新的功能，而不是修改原有的diamante。
定义：

开闭原则的定义是：一个软件实体，如类、模块和函数，应该对扩展开放，对修改关闭。这意味着软件实体应该通过扩展来实现变化，而不是通过修改已有的代码来实现变化。这个原则是软件设计中最基础、最重要的设计原则之一。
总之，开闭原则是面向对象设计中的重要原则之一，它强调对扩展开放、对修改关闭，以提高软件的可维护性、可扩展性和可复用性。通过采用适当的实现策略和应对挑战的策略，可以在软件开发中有效地应用这一原则。


### 3. 里氏替换原则
里氏替换原则(Liskov Substitution Principle, LSP)是面向对象设计中的一个重要原则，由芭芭拉·利斯科夫在1987年提出。以下是关于里氏替换原则的详细解释：

定义：

里氏替换原则的定义是，如果对一个类型为S的对象o1，都有类型为T的对象o2，使得以T定义的所有程序P在所有的对象o1都代换成o2时，程序P的行为没有发生变化，那么类型S是类型T的子类型。简单来说，子类必须能够替换其父类，并且不会改变程序的正确性。

核心思想：

里氏替换原则的核心思想是，在使用继承时，子类应该保持父类的行为。子类可以扩展父类的功能，但不能改变父类原有的功能。这意味着，子类在替换父类时，程序的行为应该保持一致，不会出现意外的结果。


目的与好处：

增强代码的可维护性：通过遵循里氏替换原则，可以确保在修改或扩展系统时，不会破坏现有功能的行为，从而减少了维护成本。

提高代码的可重用性：子类可以继承父类的属性和方法，并在不改变父类行为的基础上进行扩展，这增加了代码的重用性。

增加系统的灵活性：由于子类可以替换父类而不影响程序的行为，这使得系统更加灵活，可以动态地替换对象以适应不同的需求。

实现策略：

为了遵循里氏替换原则，可以采取以下策略：

确保子类不修改父类已实现的方法的行为：子类可以添加新的方法或重载父类的方法，但不能重写父类的非抽象方法，以确保父类的行为不被改变。

子类可以增加新的行为：子类可以在继承父类的基础上添加新的功能或行为，以满足特定的需求。

使用抽象类和接口：通过定义抽象类和接口来规定父类的行为，子类必须实现这些抽象方法和接口，以确保与父类的一致性。

注意事项：

虽然里氏替换原则带来了很多好处，但在实际应用中也需要注意以下几点：

避免过度继承：过度使用继承可能会导致类的层次结构过于庞大复杂，增加了系统的维护成本和理解难度。在必要时可以考虑使用其他关系（如组合、聚合或依赖）来替代继承。

关注继承的正确性：并非所有的类都适合使用继承关系。在确定使用继承前，应该仔细分析类之间的关系，确保它们符合里氏替换原则的要求。

总之，里氏替换原则是面向对象设计中的一个重要原则，它确保了软件的可维护性、可扩展性和健壮性。通过遵循这一原则，可以设计出更加灵活、可重用和易于维护的软件系统。

### 4. 依赖倒置原则
依赖倒置原则（Dependency Inversion Principle，DIP）是面向对象设计中的一个重要原则，它强调了依赖关系的方向性。以下是关于依赖倒置原则的详细解释：

定义：

依赖倒置原则规定，高层模块不应该依赖于低层模块，它们都应该依赖于抽象。抽象不应该依赖于细节，细节应该依赖于抽象。

核心思想：

依赖倒置原则的核心思想是，在依赖关系中，应该遵循从抽象到具体的顺序，即高层模块依赖于抽象接口或抽象类，而低层模块依赖于具体的实现类。这样设计的目的是减少直接依赖，增加系统的灵活性、可维护性和可扩展性。

目的与好处：

降低直接依赖：通过引入抽象层，高层模块和低层模块之间的依赖关系变得更加间接，降低了直接依赖的风险。

提高系统的灵活性：由于高层模块依赖于抽象接口或抽象类，当需要替换具体的实现类时，只需改变抽象接口或抽象类的实现，而不需要修改高层模块的代码。

提高系统的可维护性：由于减少了直接依赖，当需要对系统进行修改或维护时，只需要关注抽象接口或抽象类的实现，而不需要关注所有的依赖关系。

提高系统的可扩展性：由于高层模块依赖于抽象接口或抽象类，当需要添加新的功能时，可以轻松地添加新的抽象接口或抽象类，而不需要修改现有的代码。

实现策略：

为了遵循依赖倒置原则，可以采取以下策略：

使用接口或抽象类：定义接口或抽象类作为高层模块和低层模块之间的通信桥梁，高层模块依赖于接口或抽象类，低层模块依赖于具体的实现类。

依赖抽象而不是具体实现：在设计和实现时，应该尽量减少对具体实现类的依赖，而更多地依赖于抽象接口或抽象类。

反转依赖关系：通过反转依赖关系，使得高层模块依赖于抽象接口或抽象类，而低层模块依赖于具体实现类。

注意事项：

虽然依赖倒置原则带来了很多好处，但在实际应用中也需要注意以下几点：

适度使用抽象：过度使用抽象可能会导致系统的复杂度增加，因此需要适度使用抽象，并在适当的层次使用具体实现。

注意抽象层的设计：抽象层的设计应该简洁明了，易于理解和使用，并且应该能够覆盖大部分的业务需求。

保持抽象层的稳定性：抽象层应该是稳定的，不应该频繁地更改，否则会导致高层模块和低层模块之间的依赖关系变得不稳定。

总之，依赖倒置原则是面向对象设计中的一个重要原则，它强调了依赖关系的方向性，并通过引入抽象层来降低直接依赖，提高系统的灵活性、可维护性和可扩展性。通过遵循这一原则，可以设计出更加健壮、可重用和易于维护的软件系统。


```
D:\tools\TEMP\npm\npm\pnpm.cmd run start:debug

> nest-demo@0.0.1 start:debug D:\2026\demo\private-demo\nest-demo
> nest start --debug --watch -b swc


Successfully compiled: 461 files with swc (186.33ms)
Starting inspector on 127.0.0.1:9229 failed: address already in use
Watching for file changes.
[Nest] 63876  - 2024/08/31 17:10:49     LOG [NestFactory] Starting Nest application...
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +93ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] RedisModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] RedisCoreModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ZzylModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] WinstonModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] EventEmitterModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] WebsiteFavoritesModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] AuthModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ProxyDataModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] CommonModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] SysUserModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] AuthModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] UserModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] BookModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] RoleModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] MenuModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] PermissionModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ApplicationModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ModuleModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] UserModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] RoleModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] MenuModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] DiscoveryModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] HttpModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ServeStaticModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ScheduleModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [AppCtx] app ctx 日志输入测试的： +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [AppCtx] AppController +0ms
[Nest] 63876  - 2024/08/31 17:10:49 VERBOSE [AppCtx] app ctx  +0ms
[Nest] 63876  - 2024/08/31 17:10:49 VERBOSE [AppCtx] AppController +0ms
[Nest] 63876  - 2024/08/31 17:10:49   DEBUG [AppCtx] app ctx  +1ms
[Nest] 63876  - 2024/08/31 17:10:49   DEBUG [AppCtx] AppController +0ms
[Nest] 63876  - 2024/08/31 17:10:49   ERROR [AppCtx] app ctx  +0ms
AppController
[Nest] 63876  - 2024/08/31 17:10:49    WARN [AppCtx] app ctx  +0ms
[Nest] 63876  - 2024/08/31 17:10:49    WARN [AppCtx] AppController +0ms
[Nest] 63876  - 2024/08/31 17:10:49 VERBOSE [AppCtx] appCtx hello +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] AppModule dependencies initialized +0ms
query: SELECT VERSION() AS `version`
query: SELECT VERSION() AS `version`
query: SELECT VERSION() AS `version`
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +40ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] BaiduUserModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ListHistoryModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TagModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] GoodsStockModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] OrganizationModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ProductModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] ManufacturerModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] BaiduShareModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +2ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] EmployeeModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] CategoryModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] SysDeptModule dependencies initialized +1ms
[Nest] 63876  - 2024/08/31 17:10:49     LOG [InstanceLoader] NursingProjectModule dependencies initialized +0ms
[RoutesResolver] AppController {/}: +0ms
[RouterExplorer] Mapped {/, GET} route +2ms
[RouterExplorer] Mapped {/test, GET} route +1ms
[RouterExplorer] Mapped {/search, POST} route +0ms
[RouterExplorer] Mapped {/mp-configuration/table-config-panel, POST} route +1ms
[RouterExplorer] Mapped {/assem/page-assem-models, POST} route +0ms
[RoutesResolver] HttpController {/http}: +0ms
[RoutesResolver] EventEmitterController {/event-emitter}: +1ms
[RoutesResolver] BaiduShareController {/baidu-share}: +0ms
[RouterExplorer] Mapped {/baidu-share/js, GET} route +0ms
[RouterExplorer] Mapped {/baidu-share/collectResources, POST} route +1ms
[RouterExplorer] Mapped {/baidu-share/collectBaiduResources, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/collectPasswordResources, POST} route +1ms
[RouterExplorer] Mapped {/baidu-share/create-local-page-share, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/update-local-page-share, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/updataBaiduResourcesDirs, POST} route +1ms
[RouterExplorer] Mapped {/baidu-share/UpdataBaiduResources, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/createBaiduResources, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/createSearchBodyData, POST} route +1ms
[RouterExplorer] Mapped {/baidu-share/ResourcesCode, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/create-local-history, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/local-print, POST} route +1ms
[RouterExplorer] Mapped {/baidu-share/local-update-birdie-search, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/local-remove-share-url, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/local-update-baidu, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/local-update-repeat, POST} route +0ms
[RouterExplorer] Mapped {/baidu-share/local-demo-test, POST} route +1ms
[RoutesResolver] BaiduUserController {/baidu-user}: +0ms
[RouterExplorer] Mapped {/baidu-user/user-info, POST} route +0ms
[RoutesResolver] ListHistoryController {/list-history}: +0ms
[RoutesResolver] WebsiteFavoritesController {/website-favorites}: +0ms
[RouterExplorer] Mapped {/website-favorites, POST} route +0ms
[RouterExplorer] Mapped {/website-favorites, GET} route +0ms
[RouterExplorer] Mapped {/website-favorites/:id, GET} route +1ms
[RouterExplorer] Mapped {/website-favorites/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/website-favorites/:id, DELETE} route +0ms
[RoutesResolver] TagController {/tag}: +0ms
[RouterExplorer] Mapped {/tag, POST} route +0ms
[RouterExplorer] Mapped {/manufacturer, GET} route +0ms
[RouterExplorer] Mapped {/manufacturer/:id, GET} route +1ms
[RouterExplorer] Mapped {/manufacturer/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/manufacturer/:id, DELETE} route +0ms
[NestApplication] Nest application successfully started +7ms
http://127.0.0.1:3000 +2ms
http://127.0.0.1:3000/api-doc +0ms
http://127.0.0.1:3000/zzyl-doc +0ms
http://127.0.0.1:3000/platform-doc +0ms
http://127.0.0.1:3000/tj-learning-doc +0ms
http://127.0.0.1:3000/doc.html +1ms
http://192.168.0.104:3000 +0ms
Application is running on: http://[::1]:3000


```
