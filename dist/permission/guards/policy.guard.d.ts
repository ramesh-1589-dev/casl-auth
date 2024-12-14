import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppAbility, PermissionFactory } from '../factory/permission.factory';
interface IPolicyHandler {
    handle(ability: AppAbility): boolean;
}
type PolicyHandlerCallback = (ability: AppAbility) => boolean;
export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;
export declare const CheckPolicies: (...handlers: PolicyHandler[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class PoliciesGuard implements CanActivate {
    private reflector;
    private permissionFactory;
    constructor(reflector: Reflector, permissionFactory: PermissionFactory);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
