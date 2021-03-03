import { CreatePostArgs } from "./args/CreatePostArgs";
import { Post } from "../../../models/Post";
export declare class CreatePostResolver {
    createPost(ctx: any, args: CreatePostArgs): Promise<Post>;
}
