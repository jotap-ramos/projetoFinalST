import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerController } from "./controllers/CreateCustomerController"
import { ListCustomersController } from './controllers/ListCustomersController'
import { DeleteCustomerController } from "./controllers/DeleteCustomerController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    //Rota de teste inicial 
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    //Rota para cadastro de novo cliente
    fastify.post("/customer", async (request:FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    //Rota para listagem de clientes
    fastify.get("/customers", async (request:FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)
    })

    //Rota para deleção de clientes
      fastify.delete("/customer", async (request:FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })

}