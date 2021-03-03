import { UpsertPostArgs } from "./args/UpsertPostArgs";
import { Post } from "../../../models/Post";
export declare class UpsertPostResolver {
    upsertPost(ctx: any, args: UpsertPostArgs): Promise<Post>;
}
