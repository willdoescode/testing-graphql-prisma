import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    role?: EnumRoleFilter | undefined;
    posts?: PostListRelationFilter | undefined;
}
