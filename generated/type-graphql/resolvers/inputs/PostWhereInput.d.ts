import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    published?: BoolFilter | undefined;
    title?: StringFilter | undefined;
    author?: UserRelationFilter | undefined;
    authorId?: StringNullableFilter | undefined;
}
