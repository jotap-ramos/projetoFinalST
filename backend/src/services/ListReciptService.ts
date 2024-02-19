import prismaClient from "../prisma";

// Cria uma classe responsável por listar os carros cadastrados
class ListReciptService {
    async execute() {
        // Busca os carros cadastrados na coleção 'car'
        const recipts = await prismaClient.recipt.findMany();
        return recipts;
    }
}

export { ListReciptService };
