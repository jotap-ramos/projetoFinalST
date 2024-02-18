import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCarService } from '../services/CreateCarService';

class CreateCarController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { modelo, status, valor_mes, condicao } = request.body as { modelo: string, status: string, valor_mes: number, condicao: number };
      const createCarService = new CreateCarService();
      const car = await createCarService.execute({ modelo, status, valor_mes, condicao });
      reply.code(201).send(car);
    } catch (error) {
      console.error("Error creating car:", error);
      reply.code(500).send({ error: 'Error creating car' });
    }
  }
}

export { CreateCarController };

