import prismaClient from "../../prisma";

// Cria uma classe responsável por listar os carros cadastrados
class ListCarsService {
  async execute() {
    // Busca os carros cadastrados na coleção 'car'
    const cars = await prismaClient.car.findMany();
    return cars;
  }
}

export { ListCarsService };
