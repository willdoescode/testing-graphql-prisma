import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import {HelloWorldResolver} from "./resolvers/HelloWorldResolver";
import {UserResolver} from "./resolvers/UserResolver";


(async () => {
	const app = express()

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloWorldResolver, UserResolver],
			validate: true
		}),
		context: ({ req, res }) => ({ req, res })
	})

	apolloServer.applyMiddleware({app, cors: false})
	const port = process.env.PORT || 4000
	app.listen(port, () => {
		console.log(`server started at http://localhost:${port}/graphql`)
	})

	// const newUser = await prisma.user.create({
	// 	data: {
	// 		name: 'Joshua',
	// 		email: 'joshuajameslane@icloud.com',
	// 	},
	// })

	// const users = await prisma.user.findMany()
	// console.log(users)
})()
