import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserPostsArgs } from "./args/UserPostsArgs";
export declare class UserRelationsResolver {
    posts(user: User, ctx: any, args: UserPostsArgs): Promise<Post[]>;
}
