import prismaClient from "../../prisma";

// Cria uma classe responsável por listar os recibos
class ListReciptService {
  async execute() {
    // Busca as listas cadastradas na coleção 'recipt'
    const recipts = await prismaClient.recipt.findMany();
    return recipts;
  }
}

export { ListReciptService };
