import { InferSubjects, MongoAbility } from '@casl/ability';
import { Actions } from '../enums/actions.enum';
export type Subjects = InferSubjects<string | 'all'>;
export type AppAbility = MongoAbility<[Actions, Subjects]>;
export declare class PermissionFactory {
    createForUser(): MongoAbility<import("@casl/ability").AbilityTuple, import("@casl/ability").MongoQuery>;
}
