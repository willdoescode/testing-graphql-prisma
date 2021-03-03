import { Post } from "../models/Post";
export declare class User {
    id: string;
    createdAt: Date;
    email: string;
    name?: string | null;
    role: "USER" | "ADMIN";
    posts?: Post[];
}
