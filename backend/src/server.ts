import Fastify from 'fastify';
import cors from '@fastify/cors';
//importa rotas do diretório ./routes
import { routes } from './routes';

//Retorna o logger 
const app = Fastify({ logger: true })

//retorna error declarados nas rotas (throw new error) 
app.setErrorHandler((error, request, reply ) => {
    reply.code(400).send({message: error.message})
})

//inicializa a aplicação 
const start = async () => {
    
    await app.register(cors);
    await app.register(routes);

        try{
            await app.listen({port:3333})
        }catch(err){
        //Para a aplicação caso haja erro 
        process.exit(1);
        }
}

start();