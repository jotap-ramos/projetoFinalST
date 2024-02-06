import {FastifyRequest, FastifyReply} from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService'

class CreateCustomerController{
    //método handle recebe dois parâmetro request/reply
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        //inicializa o serviço (inicializa a classe que foi criada para o serviço)
        const customerService = new CreateCustomerService()

        //Espera a execução do método 'execute()' presente na classe do serviço 
        const customer = await customerService.execute();
        
        //devolve para a api o retorno da execução do método execute()
        reply.send(customer);
    
    }
}

export { CreateCustomerController }