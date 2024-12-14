"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciesGuard = exports.CheckPolicies = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const policy_decorator_1 = require("../decorators/policy.decorator");
const permission_factory_1 = require("../factory/permission.factory");
const CheckPolicies = (...handlers) => (0, common_1.SetMetadata)(policy_decorator_1.CHECK_POLICIES_KEY, handlers);
exports.CheckPolicies = CheckPolicies;
let PoliciesGuard = class PoliciesGuard {
    constructor(reflector, permissionFactory) {
        this.reflector = reflector;
        this.permissionFactory = permissionFactory;
    }
    async canActivate(context) {
        const requiredPolicies = this.reflector.get(policy_decorator_1.CHECK_POLICIES_KEY, context.getHandler());
        if (!requiredPolicies)
            return true;
        const ability = this.permissionFactory.createForUser();
        const hasAccess = requiredPolicies.map(policy => policy(ability));
        if (hasAccess.some(can => !can)) {
            throw new common_1.ForbiddenException('You do not have permission to perform this action');
        }
        return true;
    }
};
exports.PoliciesGuard = PoliciesGuard;
exports.PoliciesGuard = PoliciesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        permission_factory_1.PermissionFactory])
], PoliciesGuard);
//# sourceMappingURL=policy.guard.js.map