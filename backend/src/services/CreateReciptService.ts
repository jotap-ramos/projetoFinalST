import { Identifier } from "typescript";
import prismaClient from "../prisma";

interface CreateReciptProps {
  tempo: string;
  valor_total: number;
  customer_id: string;
}

class CreateReciptService {
  async execute(createReciptProps: CreateReciptProps) {
    const recipt = await prismaClient.recipt.create({
      data: createReciptProps,
    });

    return recipt;
  }
}

export { CreateReciptService };
