import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
export declare class UserCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    email: string;
    name?: string | undefined;
    role?: "USER" | "ADMIN" | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
