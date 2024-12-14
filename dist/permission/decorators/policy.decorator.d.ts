import { AppAbility } from '../factory/permission.factory';
export declare const CHECK_POLICIES_KEY = "check_policy";
export type PolicyHandler = (ability: AppAbility) => boolean;
export declare const CheckPolicies: (...handlers: PolicyHandler[]) => import("@nestjs/common").CustomDecorator<string>;
