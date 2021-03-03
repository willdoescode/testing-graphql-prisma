import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {PrismaClient} from "@prisma/client";
import {User} from "../entities/User";

const prisma = new PrismaClient();

@Resolver()
export class UserResolver {
	@Query(() => [User])
	async users() {
		return await prisma.user.findMany()
	}

	@Mutation(() => User)
	async createUser(
		@Arg('email') email: string,
		@Arg('name', {nullable: true}) name?: string,
	) {
		return await prisma.user.create({
			data: {
				email,
				name,
			}
		})
	}
}
