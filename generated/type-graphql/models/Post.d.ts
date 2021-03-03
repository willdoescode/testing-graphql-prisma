import { User } from "../models/User";
export declare class Post {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
    title: string;
    author?: User | null;
    authorId?: string | null;
}
