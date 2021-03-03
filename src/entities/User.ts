import {Field, Int, ObjectType} from "type-graphql";

@ObjectType()
export class User {
	@Field(() => Int)
	id!: number

	@Field(() => Date)
	createdAt!: Date

	@Field(() => String, {nullable: true})
	email?: string

	@Field(() => String)
	name!: string
}
