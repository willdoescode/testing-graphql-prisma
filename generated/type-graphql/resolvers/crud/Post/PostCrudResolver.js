"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregatePostArgs_1 = require("./args/AggregatePostArgs");
const CreatePostArgs_1 = require("./args/CreatePostArgs");
const DeleteManyPostArgs_1 = require("./args/DeleteManyPostArgs");
const DeletePostArgs_1 = require("./args/DeletePostArgs");
const FindFirstPostArgs_1 = require("./args/FindFirstPostArgs");
const FindManyPostArgs_1 = require("./args/FindManyPostArgs");
const FindUniquePostArgs_1 = require("./args/FindUniquePostArgs");
const UpdateManyPostArgs_1 = require("./args/UpdateManyPostArgs");
const UpdatePostArgs_1 = require("./args/UpdatePostArgs");
const UpsertPostArgs_1 = require("./args/UpsertPostArgs");
const helpers_1 = require("../../../helpers");
const Post_1 = require("../../../models/Post");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePost_1 = require("../../outputs/AggregatePost");
let PostCrudResolver = class PostCrudResolver {
    async post(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.findUnique(args);
    }
    async findFirstPost(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.findFirst(args);
    }
    async posts(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.findMany(args);
    }
    async createPost(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.create(args);
    }
    async deletePost(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.delete(args);
    }
    async updatePost(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.update(args);
    }
    async deleteManyPost(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.deleteMany(args);
    }
    async updateManyPost(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.updateMany(args);
    }
    async upsertPost(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).post.upsert(args);
    }
    async aggregatePost(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).post.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniquePostArgs_1.FindUniquePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "post", null);
__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstPostArgs_1.FindFirstPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "findFirstPost", null);
__decorate([
    TypeGraphQL.Query(_returns => [Post_1.Post], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyPostArgs_1.FindManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "posts", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreatePostArgs_1.CreatePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "createPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeletePostArgs_1.DeletePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "deletePost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdatePostArgs_1.UpdatePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "updatePost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyPostArgs_1.DeleteManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "deleteManyPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyPostArgs_1.UpdateManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "updateManyPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertPostArgs_1.UpsertPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "upsertPost", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregatePost_1.AggregatePost, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregatePostArgs_1.AggregatePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "aggregatePost", null);
PostCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostCrudResolver);
exports.PostCrudResolver = PostCrudResolver;
