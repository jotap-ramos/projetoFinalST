import prismaClient from "../prisma";

//cria classe responsável por requisitar clientes cadastrados
class ListCustomersService{
    async execute(){

        //busca itens cadastrados na coleção 'customer'
        const customers = await prismaClient.customer.findMany();

        return customers;

        }
    }

export {ListCustomersService}