import prismaClient from "../prisma";

//interface/estrutura com as propriedades do usuário que vamos manipular depois
interface CreateCustomerProps{
    name: string;
    email: string;
}

class CreateCustomerService{
    async execute({name, email}: CreateCustomerProps){

        //tratativa de erro simples
        //caso usuário não preencha nome ou email (ambos obrigatórios)
        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }

        //armazena dados do usuário no banco de dados
        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            },include: {
                recipt: true
            }
        })

        return customer
    }
}

export { CreateCustomerService }