import prismaClient from "../prisma";


interface CreateReciptProps{
tempo : string,
valor_total: number,
}

class CreateReciptService{
    async execute({tempo,valor_total}: CreateReciptProps){

    const recipt = await prismaClient.recipt.create({
            data:{
              tempo,
              valor_total
            }
        })

        return recipt
    }
}

export { CreateReciptService }