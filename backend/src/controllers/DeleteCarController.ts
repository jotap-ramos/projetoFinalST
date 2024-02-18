import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCarService } from '../services/DeleteCarService';

class DeleteCarController {
  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      
      const deleteCarService = new DeleteCarService();
      
      await deleteCarService.execute(id);
      
      reply.code(204).send();
    } catch (error) {
      
      console.error("Error deleting car:", error);
      
      reply.code(500).send({ error: 'Error deleting car' });
    }
  }
}

export { DeleteCarController };
