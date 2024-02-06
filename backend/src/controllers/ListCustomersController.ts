import { FastifyRequest, FastifyReply } from 'fastify'
import { ListCustomersService } from '../services/ListCustomersService'

class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        //inicializa classe
        const listCustomerService = new ListCustomersService;

        //executa o serviço listCustomerService
        const customers = await listCustomerService.execute();

         reply.send(customers);
    }
}

export { ListCustomersController }