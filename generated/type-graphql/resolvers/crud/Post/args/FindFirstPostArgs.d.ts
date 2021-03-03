import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
export declare class FindFirstPostArgs {
    where?: PostWhereInput | undefined;
    orderBy?: PostOrderByInput[] | undefined;
    cursor?: PostWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "published" | "title" | "authorId"> | undefined;
}
