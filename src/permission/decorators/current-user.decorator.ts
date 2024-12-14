import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { currentUser } from '../constants/user';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return (request.user = currentUser);
  },
);
