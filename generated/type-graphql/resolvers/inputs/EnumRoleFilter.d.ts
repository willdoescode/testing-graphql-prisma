import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
export declare class EnumRoleFilter {
    equals?: "USER" | "ADMIN" | undefined;
    in?: Array<"USER" | "ADMIN"> | undefined;
    notIn?: Array<"USER" | "ADMIN"> | undefined;
    not?: NestedEnumRoleFilter | undefined;
}
