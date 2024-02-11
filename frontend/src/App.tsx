import {FiTrash} from 'react-icons/fi'
import {useEffect, useState} from 'react'
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

  //hook 'useEffect', não exige parâmetro, roda durante a renderização da página
  useEffect(() => {loadCustomers();},[])

  async function loadCustomers(){
    const response = await api.get("/customers")
    setCustomers(response.data);
  }

  return(
    <div className="w-full min-h-screen bg-gray-900 flex justify-center first-letter px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>

        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Nome:</label>
          <input className="w-full mb-5 p-2 rounded" type="text" placeholder="Digite seu nome complet..."/>

          <label className="font-medium text-white">Email:</label>
          <input className="w-full mb-5 p-2 rounded" type="text" placeholder="Digite seu email..."/>

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

              <button className=" bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2 ">
                <FiTrash size={18} color="#FFF"/>
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}