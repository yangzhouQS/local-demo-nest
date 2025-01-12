import { createParamMetadata } from "./@nestjsx/common";
import { get } from "lodash";


export const User = createParamMetadata((data: unknown, ctx: any) => {
  const request = ctx.switchToHttp().getRequest();
  return get(request, "user");
});
