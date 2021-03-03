import { UserOrderByInput } from "../inputs/UserOrderByInput";
export declare class PostOrderByInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    author?: UserOrderByInput | undefined;
    authorId?: "asc" | "desc" | undefined;
}
