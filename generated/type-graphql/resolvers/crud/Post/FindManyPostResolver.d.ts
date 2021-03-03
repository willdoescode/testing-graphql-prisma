import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { Post } from "../../../models/Post";
export declare class FindManyPostResolver {
    posts(ctx: any, args: FindManyPostArgs): Promise<Post[]>;
}
