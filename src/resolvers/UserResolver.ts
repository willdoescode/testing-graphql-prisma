import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {User} from '../../generated/type-graphql'
import {prisma} from "../context";

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
