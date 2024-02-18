import prismaClient from "../prisma";


interface CreateCarProps{
    modelo: string;
    status: boolean;
    valor_mes: number;
    condicao: string;
}

class CreateCarService{
    async execute({modelo, status, valor_mes, condicao}: CreateCarProps){

    const car = await prismaClient.car.create({
            data:{
                modelo,
                status,
                valor_mes,
                condicao
            }
        })

        return car
    }
}

export { CreateCarService }