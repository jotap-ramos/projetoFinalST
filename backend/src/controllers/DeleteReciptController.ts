import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteReceiptService } from '../services/DeleteReceiptService';

class ReceiptController {
  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const deleteReceiptService = new DeleteReceiptService();
      await deleteReceiptService.execute(id);
      reply.code(204).send();
    } catch (error) {
      console.error("Error deleting receipt:", error);
      reply.code(500).send({ error: 'Error deleting receipt' });
    }
  }
}

export { ReceiptController };
