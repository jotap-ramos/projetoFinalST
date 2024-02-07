import prismaClient from "../prisma/index"

//estrutura modelo com a propriedade id, que será utilizada posteriormente 
interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService{
    async execute({ id }: DeleteCustomerProps){

        //tratativa de erro simples (id não inserido)
        if(!id){
            throw new Error("Solicitação inválida.")
        }

        //passa o valor de 'customer' à variável findcustomer (caso o id seja o mesmo)
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        //retorna erro caso não haja cliente com o id informado na base de dados
        if(!findCustomer){
            throw new Error("Cliente nao existe!")
        }

        //caso tenha encontrado cliente com o id fornecido, exclui da base de dados através da função built-in '.delete'
        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        //retorna mensagem caso tudo tenha corrido como previsto (cliente deletado)
        return{ message: "Deletado com sucesso!"}
    }

}

export { DeleteCustomerService }