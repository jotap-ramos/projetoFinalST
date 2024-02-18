import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteStockService } from '../services/DeleteStockService';

class DeleteStockController {
  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const deleteStockService = new DeleteStockService();
      await deleteStockService.execute(id);
      reply.code(204).send();
    } catch (error) {
      console.error("Error deleting stock:", error);
      reply.code(500).send({ error: 'Error deleting stock' });
    }
  }
}

export { DeleteStockController };
