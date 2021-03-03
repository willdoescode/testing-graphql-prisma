import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    published?: boolean | undefined;
    title: string;
    author?: UserCreateNestedOneWithoutPostsInput | undefined;
}
