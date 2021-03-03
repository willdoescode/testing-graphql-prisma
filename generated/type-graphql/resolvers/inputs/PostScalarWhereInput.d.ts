import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | undefined;
    OR?: PostScalarWhereInput[] | undefined;
    NOT?: PostScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    published?: BoolFilter | undefined;
    title?: StringFilter | undefined;
    authorId?: StringNullableFilter | undefined;
}
