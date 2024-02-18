import { FastifyRequest, FastifyReply } from 'fastify';
import { ListReceiptsService } from '../services/ListReceiptsService';

class ReceiptController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    try {
      const listReceiptsService = new ListReceiptsService();
      const receipts = await listReceiptsService.execute();
      reply.code(200).send(receipts);
    } catch (error) {
      console.error("Error listing receipts:", error);
      reply.code(500).send({ error: 'Error listing receipts' });
    }
  }
}

export { ReceiptController };
