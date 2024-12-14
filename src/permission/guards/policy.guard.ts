/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, ForbiddenException, Injectable, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CHECK_POLICIES_KEY } from '../decorators/policy.decorator';
import { AppAbility, PermissionFactory } from '../factory/permission.factory';

interface IPolicyHandler {
  handle(ability: AppAbility): boolean;
}

type PolicyHandlerCallback = (ability: AppAbility) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

export const CheckPolicies = (...handlers: PolicyHandler[]) => SetMetadata(CHECK_POLICIES_KEY, handlers);


@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private permissionFactory: PermissionFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    
    const requiredPolicies = this.reflector.get(CHECK_POLICIES_KEY, context.getHandler());
    if(!requiredPolicies) return true;

    // const { user } = context.switchToHttp().getRequest();
    // const ability = this.permissionFactory.createForUser(user);

    const ability = this.permissionFactory.createForUser();
    
    // Check each policy
    const hasAccess = requiredPolicies.map(policy => policy(ability));
    if (hasAccess.some(can => !can)) {
      throw new ForbiddenException('You do not have permission to perform this action');
    }

    return true;
  }

}
