import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateStockService } from '../services/CreateStockService';

class CreateStockController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { modelo, status, valor_mes, condicao } = request.body as { modelo: string, status: string, valor_mes: number, condicao: number };
      const createStockService = new CreateStockService();
      const stock = await createStockService.execute({ modelo, status, valor_mes, condicao });
      reply.code(201).send(stock);
    } catch (error) {
      console.error("Error creating stock:", error);
      reply.code(500).send({ error: 'Error creating stock' });
    }
  }
}

export { CreateStockController };
