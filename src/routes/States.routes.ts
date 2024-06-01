import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify"
import MyCrypt from "../utils/MyCrypt"

interface State {
    id: number;
    name: string;
}
export default class StatesRouter {
    states: State[] = []

    getData = (server: FastifyInstance) => {
        server.get("/states", async (req: FastifyRequest, reply: FastifyReply) => {
            await this.formatData()
            reply.status(200).send(this.states)
        })
    }

    fetchData = async () => {
        const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        return await response.json()
    }

    formatData = async () => {
        this.states = []
        const data = await this.fetchData()
        return data.forEach(({ id, nome }: { id: number; nome: string }) => {
            const myCrypt = new MyCrypt(nome)
            this.states.push({ id: id, name: myCrypt.encrypt() })
        })
    }
}
