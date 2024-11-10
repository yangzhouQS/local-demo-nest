export const VERSION_NEUTRAL = Symbol("VERSION_NEUTRAL");


export type VersionValue =
  | string 
  | typeof VERSION_NEUTRAL
  | Array<string | typeof VERSION_NEUTRAL>;


export interface VersionOptions {
  version?: VersionValue;
}
