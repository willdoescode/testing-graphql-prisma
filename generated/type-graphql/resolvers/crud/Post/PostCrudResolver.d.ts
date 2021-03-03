import { GraphQLResolveInfo } from "graphql";
import { AggregatePostArgs } from "./args/AggregatePostArgs";
import { CreatePostArgs } from "./args/CreatePostArgs";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";
import { DeletePostArgs } from "./args/DeletePostArgs";
import { FindFirstPostArgs } from "./args/FindFirstPostArgs";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { FindUniquePostArgs } from "./args/FindUniquePostArgs";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { UpsertPostArgs } from "./args/UpsertPostArgs";
import { Post } from "../../../models/Post";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePost } from "../../outputs/AggregatePost";
export declare class PostCrudResolver {
    post(ctx: any, args: FindUniquePostArgs): Promise<Post | null>;
    findFirstPost(ctx: any, args: FindFirstPostArgs): Promise<Post | null>;
    posts(ctx: any, args: FindManyPostArgs): Promise<Post[]>;
    createPost(ctx: any, args: CreatePostArgs): Promise<Post>;
    deletePost(ctx: any, args: DeletePostArgs): Promise<Post | null>;
    updatePost(ctx: any, args: UpdatePostArgs): Promise<Post | null>;
    deleteManyPost(ctx: any, args: DeleteManyPostArgs): Promise<AffectedRowsOutput>;
    updateManyPost(ctx: any, args: UpdateManyPostArgs): Promise<AffectedRowsOutput>;
    upsertPost(ctx: any, args: UpsertPostArgs): Promise<Post>;
    aggregatePost(ctx: any, info: GraphQLResolveInfo, args: AggregatePostArgs): Promise<AggregatePost>;
}
