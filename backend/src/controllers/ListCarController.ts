import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCarService } from '../services/ListCarService';

class ListCarController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    try {
      const listCarService = new ListCarService();
      
      const cars = await listCarService.execute();
      
      reply.code(200).send(cars);
    } catch (error) {
      
      console.error("Error listing cars:", error);
      
      reply.code(500).send({ error: 'Error listing cars' });
    }
  }
}

export { ListCarController };

