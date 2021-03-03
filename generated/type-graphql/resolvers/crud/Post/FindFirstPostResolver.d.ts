import { FindFirstPostArgs } from "./args/FindFirstPostArgs";
import { Post } from "../../../models/Post";
export declare class FindFirstPostResolver {
    findFirstPost(ctx: any, args: FindFirstPostArgs): Promise<Post | null>;
}
