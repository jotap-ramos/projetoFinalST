//importa biblioteca Axios que facilita a requisição HTTP
import axios from 'axios'   

//exporta url básica que será reutilizada diversas vezes durante as requisições na aplicação 
export const api = axios.create({
    baseURL: "http://localhost:3333"
})