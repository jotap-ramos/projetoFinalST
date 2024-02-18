import prismaClient from "../prisma/index";

interface DeleteCarProps {
    id: string;
}

class DeleteCarService {
    async execute({ id }: DeleteCarProps) {

        // Verifica se o ID foi fornecido
        if (!id) {
            throw new Error("Solicitação inválida.");
        }

        // Procura o carro pelo ID
        const findCar = await prismaClient.car.findFirst({
            where: {
                id: id
            }
        });

        // Se o carro não for encontrado, lança um erro
        if (!findCar) {
            throw new Error("Carro não encontrado!");
        }

        // Deleta o carro
        await prismaClient.car.delete({
            where: {
                id: findCar.id
            }
        });

        return { message: "Carro deletado com sucesso!" };
    }
}

export { DeleteCarService };
