import { DeletePostArgs } from "./args/DeletePostArgs";
import { Post } from "../../../models/Post";
export declare class DeletePostResolver {
    deletePost(ctx: any, args: DeletePostArgs): Promise<Post | null>;
}
