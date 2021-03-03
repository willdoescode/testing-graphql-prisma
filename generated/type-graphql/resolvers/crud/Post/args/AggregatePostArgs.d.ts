import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
export declare class AggregatePostArgs {
    where?: PostWhereInput | undefined;
    orderBy?: PostOrderByInput[] | undefined;
    cursor?: PostWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
