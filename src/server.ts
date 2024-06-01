import fastify from "fastify"
import envs from "./config/enviroments"
import StatesRouter from "./routes/States.routes"
import fastifyCors from "@fastify/cors"
const server = fastify({ logger: true })
server.register(fastifyCors)

const states = new StatesRouter()
states.getData(server)

server.listen({ port: envs.port }, (error, address) => {
    if (error) {
        server.log.error(error)
        process.exit(1)
    }
    console.log(`Server is listening at ${address}`)
})
