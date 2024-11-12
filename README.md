


### Next
警告
Nest 会检测处理程序何时使用 @Res() 或 @Next()，这表明你已选择特定于库的选项。如果同时使用两种方法，则该单一路由的标准方法将自动禁用，并且将不再按预期工作。
要同时使用这两种方法（例如，通过注入响应对象来仅设置 cookies/headers，但仍将其余部分留给框架），你必须在 @Res({ passthrough: true }) 装饰器中将 passthrough 选项设置为 true。

``
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
[RoutesResolver] AuthController {/auth}: +1ms
[RouterExplorer] Mapped {/auth, POST} route +0ms
[RouterExplorer] Mapped {/auth, GET} route +0ms
[RouterExplorer] Mapped {/auth/:id, GET} route +0ms
[RouterExplorer] Mapped {/auth/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/auth/:id, DELETE} route +0ms
[RoutesResolver] GoodsStockController {/goods-stock}: +0ms
[RouterExplorer] Mapped {/goods-stock/deductStock, POST} route +0ms
[RouterExplorer] Mapped {/goods-stock/create, POST} route +1ms
[RouterExplorer] Mapped {/goods-stock, GET} route +0ms
[RouterExplorer] Mapped {/goods-stock/:id, GET} route +0ms
[RouterExplorer] Mapped {/goods-stock/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/goods-stock/:id, DELETE} route +0ms
[RoutesResolver] ProxyDataController {/proxy-data}: +0ms
[RouterExplorer] Mapped {/proxy-data, POST} route +1ms
[RouterExplorer] Mapped {/proxy-data/create-response-data, POST} route +1ms
[RouterExplorer] Mapped {/proxy-data, GET} route +0ms
[RouterExplorer] Mapped {/proxy-data/:id, GET} route +0ms
[RouterExplorer] Mapped {/proxy-data/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/proxy-data/:id, DELETE} route +1ms
[RoutesResolver] OrganizationController {/organization}: +0ms
[RouterExplorer] Mapped {/organization/organizations-parent, GET} route +0ms
[RouterExplorer] Mapped {/organization, POST} route +0ms
[RouterExplorer] Mapped {/organization, GET} route +0ms
[RouterExplorer] Mapped {/organization/:id, GET} route +0ms
[RouterExplorer] Mapped {/organization/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/organization/:id, DELETE} route +0ms
[RoutesResolver] EmployeeController {/sky-admin/employee}: +1ms
[RouterExplorer] Mapped {/sky-admin/employee, POST} route +0ms
[RouterExplorer] Mapped {/sky-admin/employee, GET} route +0ms
[RouterExplorer] Mapped {/sky-admin/employee/:id, GET} route +0ms
[RouterExplorer] Mapped {/sky-admin/employee/:id, PUT} route +0ms
[RouterExplorer] Mapped {/sky-admin/employee/:id, DELETE} route +0ms
[RoutesResolver] CategoryController {/sky-admin/category}: +0ms
[RouterExplorer] Mapped {/sky-admin/category/:id, GET} route +0ms
[RouterExplorer] Mapped {/sky-admin/category, GET} route +1ms
[RouterExplorer] Mapped {/sky-admin/category, POST} route +0ms
[RouterExplorer] Mapped {/sky-admin/category/bulk, POST} route +0ms
[RouterExplorer] Mapped {/sky-admin/category/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/sky-admin/category/:id, PUT} route +0ms
[RouterExplorer] Mapped {/sky-admin/category/:id, DELETE} route +0ms
[RoutesResolver] CommonController {/zzyl/common}: +0ms
[RouterExplorer] Mapped {/zzyl/common, POST} route +0ms
[RouterExplorer] Mapped {/zzyl/common, GET} route +0ms
[RouterExplorer] Mapped {/zzyl/common/:id, GET} route +1ms
[RouterExplorer] Mapped {/zzyl/common/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/zzyl/common/:id, DELETE} route +0ms
[RoutesResolver] NursingProjectController {/zzyl/nursing-project}: +0ms
[RouterExplorer] Mapped {/zzyl/nursing-project, POST} route +0ms
[RouterExplorer] Mapped {/zzyl/nursing-project/params, POST} route +0ms
[RouterExplorer] Mapped {/zzyl/nursing-project/all, GET} route +0ms
[RouterExplorer] Mapped {/zzyl/nursing-project, GET} route +0ms
[RouterExplorer] Mapped {/zzyl/nursing-project, PUT} route +0ms
[RouterExplorer] Mapped {/zzyl/nursing-project/toggle-status, PUT} route +1ms
[RouterExplorer] Mapped {/zzyl/nursing-project/:id, DELETE} route +0ms
[RoutesResolver] SysDeptController {/zzyl/sys-dept}: +0ms
[RouterExplorer] Mapped {/zzyl/sys-dept, POST} route +0ms
[RouterExplorer] Mapped {/zzyl/sys-dept/sys-dept-all, GET} route +0ms
[RouterExplorer] Mapped {/zzyl/sys-dept, GET} route +0ms
[RouterExplorer] Mapped {/zzyl/sys-dept/:id, PUT} route +0ms
[RouterExplorer] Mapped {/zzyl/sys-dept, DELETE} route +0ms
[RouterExplorer] Mapped {/zzyl/sys-dept/toggle-status, PUT} route +0ms
[RoutesResolver] SysUserController {/zzyl/sys-user}: +0ms
[RouterExplorer] Mapped {/zzyl/sys-user, POST} route +1ms
[RouterExplorer] Mapped {/zzyl/sys-user, GET} route +0ms
[RouterExplorer] Mapped {/zzyl/sys-user/:id, GET} route +0ms
[RouterExplorer] Mapped {/zzyl/sys-user/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/zzyl/sys-user/:id, DELETE} route +0ms
[RoutesResolver] AuthController {/e-book/auth}: +0ms
[RouterExplorer] Mapped {/e-book/auth, POST} route +0ms
[RouterExplorer] Mapped {/e-book/auth, GET} route +0ms
[RouterExplorer] Mapped {/e-book/auth/:id, GET} route +0ms
[RouterExplorer] Mapped {/e-book/auth/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/e-book/auth/:id, DELETE} route +1ms
[RoutesResolver] UserController {/e-book/user}: +0ms
[RouterExplorer] Mapped {/e-book/user, POST} route +0ms
[RouterExplorer] Mapped {/e-book/user, GET} route +0ms
[RouterExplorer] Mapped {/e-book/user/:id, GET} route +0ms
[RouterExplorer] Mapped {/e-book/user/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/e-book/user/:id, DELETE} route +0ms
[RoutesResolver] BookController {/e-book/book}: +0ms
[RouterExplorer] Mapped {/e-book/book, POST} route +0ms
[RouterExplorer] Mapped {/e-book/book, GET} route +0ms
[RouterExplorer] Mapped {/e-book/book/:id, GET} route +0ms
[RouterExplorer] Mapped {/e-book/book/:id, PATCH} route +1ms
[RouterExplorer] Mapped {/e-book/book/:id, DELETE} route +0ms
[RoutesResolver] RoleController {/e-book/role}: +0ms
[RouterExplorer] Mapped {/e-book/role, POST} route +0ms
[RouterExplorer] Mapped {/e-book/role, GET} route +0ms
[RouterExplorer] Mapped {/e-book/role/:id, GET} route +1ms
[RouterExplorer] Mapped {/e-book/role/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/e-book/role/:id, DELETE} route +0ms
[RoutesResolver] MenuController {/e-book/menu}: +0ms
[RouterExplorer] Mapped {/e-book/menu, POST} route +0ms
[RouterExplorer] Mapped {/e-book/menu, GET} route +0ms
[RouterExplorer] Mapped {/e-book/menu/:id, GET} route +0ms
[RouterExplorer] Mapped {/e-book/menu/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/e-book/menu/:id, DELETE} route +0ms
[RoutesResolver] PermissionController {/e-book/permission}: +0ms
[RouterExplorer] Mapped {/e-book/permission, POST} route +1ms
[RouterExplorer] Mapped {/e-book/permission, GET} route +0ms
[RouterExplorer] Mapped {/e-book/permission/:id, GET} route +0ms
[RouterExplorer] Mapped {/e-book/permission/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/e-book/permission/:id, DELETE} route +0ms
[RoutesResolver] ApplicationController {/application}: +0ms
[RouterExplorer] Mapped {/application, POST} route +0ms
[RouterExplorer] Mapped {/application, GET} route +0ms
[RouterExplorer] Mapped {/application/:id, GET} route +0ms
[RouterExplorer] Mapped {/application/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/application/:id, DELETE} route +1ms
[RoutesResolver] ModuleController {/module}: +0ms
[RouterExplorer] Mapped {/module, POST} route +0ms
[RouterExplorer] Mapped {/module, GET} route +0ms
[RouterExplorer] Mapped {/module/:id, GET} route +0ms
[RouterExplorer] Mapped {/module/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/module/:id, DELETE} route +0ms
[RoutesResolver] ProductController {/product}: +0ms
[RouterExplorer] Mapped {/product, POST} route +1ms
[RouterExplorer] Mapped {/product, GET} route +0ms
[RouterExplorer] Mapped {/product/:id, GET} route +0ms
[RouterExplorer] Mapped {/product/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/product/:id, DELETE} route +0ms
[RouterExplorer] Mapped {/product/feature-ict, GET} route +0ms
[RoutesResolver] UserController {/user}: +0ms
[RouterExplorer] Mapped {/user, POST} route +0ms
[RouterExplorer] Mapped {/user, GET} route +0ms
[RouterExplorer] Mapped {/user/:id, GET} route +1ms
[RouterExplorer] Mapped {/user/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/user/:id, DELETE} route +0ms
[RoutesResolver] RoleController {/role}: +0ms
[RouterExplorer] Mapped {/role, POST} route +0ms
[RouterExplorer] Mapped {/role, GET} route +0ms
[RouterExplorer] Mapped {/role/:id, GET} route +0ms
[RouterExplorer] Mapped {/role/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/role/:id, DELETE} route +1ms
[RoutesResolver] MenuController {/menu}: +0ms
[RouterExplorer] Mapped {/menu, POST} route +0ms
[RouterExplorer] Mapped {/menu, GET} route +0ms
[RouterExplorer] Mapped {/menu/:id, GET} route +0ms
[RouterExplorer] Mapped {/menu/:id, PATCH} route +0ms
[RouterExplorer] Mapped {/menu/:id, DELETE} route +0ms
[RoutesResolver] ManufacturerController {/manufacturer}: +0ms
[RouterExplorer] Mapped {/manufacturer, POST} route +0ms
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


``
