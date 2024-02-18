import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateReceiptService } from '../services/CreateReceiptService';

class ReceiptController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { tempo, valor_total } = request.body as { tempo: Date, valor_total: number };
      
      const createReceiptService = new CreateReceiptService();
      
      const receipt = await createReceiptService.execute({ tempo, valor_total });
      
      reply.code(201).send(receipt);
    } catch (error) {
      
        console.error("Error creating receipt:", error);
      
        reply.code(500).send({ error: 'Error creating receipt' });
    }
  }
}

export { ReceiptController };

