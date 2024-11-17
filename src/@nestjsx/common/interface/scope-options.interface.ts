/**
 * @publicApi
 *
 * 中文文档地址: https://nestjs.docs-hub.com/fundamentals/injection-scopes
 */
export enum Scope {
  /**
   * 提供程序的单个实例在整个应用程序中共享。实例生命周期直接与应用程序生命周期相关联。
   * 一旦应用程序启动，所有的单例提供者都被实例化了。默认情况下使用单例作用域。
   * The provider can be shared across multiple classes. The provider lifetime
   * is strictly tied to the application lifecycle. Once the application has
   * bootstrapped, all providers have been instantiated.
   */
  DEFAULT,
  /**
   * 临时提供者不跨消费者共享。每个注入临时提供者的消费者都将收到一个新的专用实例。
   * transient 短暂的
   * A new private instance of the provider is instantiated for every use
   */
  TRANSIENT,
  /**
   * 为每个传入的请求专门创建提供程序的新实例。在请求完成处理后，实例将被垃圾收集。
   * A new instance is instantiated for each request processing pipeline
   */
  REQUEST,
}

/**
 * @publicApi
 *
 * @see [Injection Scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
 */
export interface ScopeOptions {
  /**
   * Specifies the lifetime of an injected Provider or Controller.
   */
  scope?: Scope;
  /**
   * Flags provider as durable. This flag can be used in combination with custom context id
   * factory strategy to construct lazy DI subtrees.
   *
   * This flag can be used only in conjunction with scope = Scope.REQUEST.
   */
  durable?: boolean;
}
