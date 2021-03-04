import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Post} from '../../generated/type-graphql'
import {prisma} from '../context'

@Resolver()
export class PostResolver {
	@Query(() => [Post])
	async posts(
		@Arg('userId') userId: string
	) {
		return await prisma.post.findMany({
			where: {
				authorId: userId
			}
		})
	}

	@Mutation(() => Post)
	async createPost(
		@Arg('title') title: string,
		@Arg('userId') userId: string
	) {
		return await prisma.post.create({
			data: {
				title,
				author: {
					connect: {
						id: userId
					}
				}
			}
		})
	}
}
