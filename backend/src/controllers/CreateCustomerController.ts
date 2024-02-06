import {FastifyRequest, FastifyReply} from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService'

class CreateCustomerController{
    //método handle recebe dois parâmetro request/reply
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        //guarda os valores de name e email enviados via requisição em formato JSON
        const { name, email } = request.body as { name: string, email: string};

        //inicializa o serviço (inicializa a classe que foi criada para o serviço)
        const customerService = new CreateCustomerService()

        //Espera a execução do método 'execute()' presente na classe do serviço 
        const customer = await customerService.execute({name, email});
        
        //devolve para a api o retorno da execução do método execute()
        reply.send(customer);
    
    }
}

export { CreateCustomerController }