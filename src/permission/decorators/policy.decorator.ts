import { SetMetadata } from '@nestjs/common';
import { AppAbility } from '../factory/permission.factory';

export const CHECK_POLICIES_KEY = 'check_policy';

export type PolicyHandler = (ability: AppAbility) => boolean;

export const CheckPolicies = (...handlers: PolicyHandler[]) =>
  SetMetadata(CHECK_POLICIES_KEY, handlers);
