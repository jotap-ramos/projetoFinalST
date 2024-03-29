import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/customerService/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    //requisição do dado 'id', tipo string
    const { id } = request.query as { id: string };

    const customerService = new DeleteCustomerService();

    const customer = await customerService.execute({ id });

    reply.send(customer);
  }
}

export { DeleteCustomerController };
