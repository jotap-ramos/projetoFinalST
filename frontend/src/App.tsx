import {FiTrash} from 'react-icons/fi'
import {useEffect, useState, FormEvent, useRef} from 'react'
import { api } from './services/api'

//criação de tipagem para reconhecimento dos objetos que serão listados no array de objetos
//os objetos buscados devem ter a tipage apresentada abaixo
interface CustomerProps{
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

export default function App(){

  //declaração do array que conterá a lista de 'usuários' atualizada 'userState'
  const [customers, setCustomers] = useState<CustomerProps[]>([])

  //declaração de referência para os inputs a serem inseridos pelo usuário
  const nameRef = useRef<HTMLInputElement| null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)

  //hook 'useEffect', não exige parâmetro, roda durante a renderização da página
  useEffect(() => {loadCustomers();},[])

  async function loadCustomers(){
    const response = await api.get("/customers")
    setCustomers(response.data);
  }

  //função assíncrona porque faremos uma requisição ao http
  async function handleSubmit(event: FormEvent){

    //previne o comportamento padrão de recarregamento da página
    event.preventDefault();

    //tratativa pra impedir submissão com um dos campos faltando (nome ou email)
    if(!nameRef.current?.value || !emailRef.current?.value) return;

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
    })

    //acresenta novo usuário inserido à lista de usuários mostrada no frontend 
    setCustomers(allCustomers => [...allCustomers, response.data])

    //limpa campo dos inputs após inserção
    nameRef.current.value = "";
    emailRef.current.value = "";
  }

  //função assíncrona para lidar com a requisição de deleção de um usuário ('customer')
  async function handleDelete(id: string){
    try{
      await api.delete("/customer", {
        params: {
          id: id,
        }
      })

      //mapeia todos os custormers listados e retorna todos menos o customer com o id do customer que 
      // selecionou-se para deleção (ou seja, que foi clicado e teve o id enviado na requisição)
      const allCustomers = customers.filter((customer) => customer.id !== id)
      setCustomers(allCustomers);

    }catch(err){
      console.log(err)
    }
  }

  return(
    <div className="w-full min-h-screen bg-gray-900 flex justify-center first-letter px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Alugue já seu carro!</h1>
        <p className="text-white">Faça seu cadastro abaixo:</p>

        {/* formulário com a propriedade onSubmit, que chama a função handleSubmit,
        responsável por  */}
        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-white">Nome:</label>
          <input ref= {nameRef} className="w-full mb-5 p-2 rounded" type="text" placeholder="Digite seu nome complet..."/>

          <label className="font-medium text-white">Email:</label>
          <input ref= {emailRef} className="w-full mb-5 p-2 rounded" type="text" placeholder="Digite seu email..."/>

          <input type="submit" value="Cadastrar" className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium" />
        </form>
        
        <section className=" flex flex-col gap-4">
          {/* mapeia os dados retornados pela função built-in useState(), armazenados na constante customers
          retorna trecho de marcação html com dados atualizados através do acesso aos valores das 
          propriedades dos objetos retornados pela função useState() */}
          {customers.map((customer) => (          
            <article key={customer.id} className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200">
              <p><span className="font-medium">Nome:</span> {customer.name}</p>
              <p><span className="font-medium">Email:</span> {customer.email}</p>
              <p><span className="font-medium">Status:</span>{ customer.status? "ATIVO" : "INATIVO"}</p>

              <button onClick={() => handleDelete(customer.id)} className=" bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2 ">
                <FiTrash size={18} color="#FFF"/>
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}