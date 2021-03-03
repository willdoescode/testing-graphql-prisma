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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Post: crudResolvers.PostCrudResolver
};
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Post: relationResolvers.PostRelationsResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver
    },
    Post: {
        post: actionResolvers.FindUniquePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        createPost: actionResolvers.CreatePostResolver,
        deletePost: actionResolvers.DeletePostResolver,
        updatePost: actionResolvers.UpdatePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        upsertPost: actionResolvers.UpsertPostResolver,
        aggregatePost: actionResolvers.AggregatePostResolver
    }
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
            const decorators = resolverActionsConfig[modelResolverActionName];
            const crudTarget = crudResolversMap[modelName].prototype;
            const actionResolversConfig = actionResolversMap[modelName];
            const actionTarget = actionResolversConfig[modelResolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, modelResolverActionName, Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName));
                decorator(actionTarget, modelResolverActionName, Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        for (const relationResolverActionName of Object.keys(relationResolverActionsConfig)) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            const relationResolverTarget = relationResolversMap[modelName].prototype;
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        for (const modelFieldName of Object.keys(enhanceConfig.fields)) {
            const decorators = enhanceConfig.fields[modelFieldName];
            for (const decorator of decorators) {
                decorator(typePrototype, modelFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
