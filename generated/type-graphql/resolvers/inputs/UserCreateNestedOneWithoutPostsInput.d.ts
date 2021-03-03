import { UserCreateOrConnectWithoutPostsInput } from "../inputs/UserCreateOrConnectWithoutPostsInput";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
