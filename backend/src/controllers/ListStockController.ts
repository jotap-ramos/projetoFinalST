import { FastifyRequest, FastifyReply } from 'fastify';
import { ListStockService } from '../services/ListStockService';

class ListStockController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    try {
      const listStockService = new ListStockService();
      const stocks = await listStockService.execute();
      reply.code(200).send(stocks);
    } catch (error) {
      console.error("Error listing stocks:", error);
      reply.code(500).send({ error: 'Error listing stocks' });
    }
  }
}

export { ListStockController };
