import { FindUniquePostArgs } from "./args/FindUniquePostArgs";
import { Post } from "../../../models/Post";
export declare class FindUniquePostResolver {
    post(ctx: any, args: FindUniquePostArgs): Promise<Post | null>;
}
