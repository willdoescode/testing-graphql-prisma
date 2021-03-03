import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { Post } from "../../../models/Post";
export declare class UpdatePostResolver {
    updatePost(ctx: any, args: UpdatePostArgs): Promise<Post | null>;
}
