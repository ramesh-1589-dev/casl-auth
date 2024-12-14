import {
  AbilityBuilder,
  createMongoAbility,
  ExtractSubjectType,
  InferSubjects,
  MongoAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Actions } from '../enums/actions.enum';
import { userRoles } from '../constants/user';

export type Subjects = InferSubjects<string | 'all'>;

export type AppAbility = MongoAbility<[Actions, Subjects]>;

interface CaslPermission {
  action: Actions;
  subject: string;
}

@Injectable()
export class PermissionFactory {
  createForUser() {
    const ability = new AbilityBuilder(createMongoAbility);
    const allPermissions = userRoles.flatMap((role) =>
      role.permissions.map((permission: CaslPermission) => ({
        action: permission.action,
        subject: permission.subject,
      })),
    );

    allPermissions.forEach((permission) => {
      ability.can(permission.action, permission.subject);
    });

    return ability.build({
      detectSubjectType: (item) => item.constructor as ExtractSubjectType<any>,
    });
  }
}
