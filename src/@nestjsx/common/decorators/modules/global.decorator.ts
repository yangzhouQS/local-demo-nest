export function Global(): ClassDecorator {
  return function(target: any) {
    target.prototype["global"] = true;
  };
}
