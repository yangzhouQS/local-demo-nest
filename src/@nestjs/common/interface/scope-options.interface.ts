export enum Scope {
  DEFAULT,
  TRANSIENT, // transient
  REQUEST // request
}

export interface ScopeOptions {
  scope?: Scope;

  durable?: boolean;
}
