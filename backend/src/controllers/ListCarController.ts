import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCarsService } from '../services/ListCarsService';

class ListCarController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    try {
      const listCarService = new ListCarsService();
      
      const cars = await listCarService.execute();
      
      reply.code(200).send(cars);
    } catch (error) {
      
      console.error("Error listing cars:", error);
      
      reply.code(500).send({ error: 'Error listing cars' });
    }
  }
}

export { ListCarController };

