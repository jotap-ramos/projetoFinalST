import prismaClient from "../../prisma/index";

interface DeleteReciptProps {
  id: string;
}

class DeleteReciptService {
  async execute({ id }: DeleteReciptProps) {
    // Verifica se o ID foi fornecido
    if (!id) {
      throw new Error("Solicitação inválida.");
    }

    // Procura o recibo pelo ID
    const findRecipt = await prismaClient.recipt.findFirst({
      where: {
        id: id,
      },
    });

    // Se o recibo não for encontrado, lança um erro
    if (!findRecipt) {
      throw new Error("Recibo não encontrado!");
    }

    // Deleta o recibo
    await prismaClient.recipt.delete({
      where: {
        id: findRecipt.id,
      },
    });

    return { message: "Recibo deletado com sucesso!" };
  }
}

export { DeleteReciptService };
