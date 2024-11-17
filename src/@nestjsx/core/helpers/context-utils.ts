
export class ContextUtils {
  public mapParamType(key: string): string {
    const keyPair = key.split(':');
    return keyPair[0];
  }
}
