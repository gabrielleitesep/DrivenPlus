import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Cadastro() {

    const navigate = useNavigate()
    const body = {
        email: "",
        name: "",
        cpf: "",
        password: ""
    }

    function cadastrar(e) {
        e.preventDefault()

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", body)
        promise.then(res => {

            console.log(res.data);
            navigate("/")
        })
        promise.catch(err => {

            console.log(err.response.data.message)
            alert("Dados cadastrais inválidos!")
    })
    }
    return (
        <div className="containerCadastrar">
            <div className="containerInput">
                <form onSubmit={cadastrar}>
                    <input placeholder="Nome" type="text" onChange={e => body.name = e.target.value} required></input>
                    <input placeholder="CPF" type="cpf" onChange={e => body.cpf = e.target.value} required></input>
                    <input placeholder="E-mail" type="email" onChange={e => body.email = e.target.value} required></input>
                    <input placeholder="Senha" type="password" onChange={e => body.password = e.target.value} required></input>
                    <button type="submit" >CADASTRAR</button>
                </form>
            </div>
            <div className="containerCadastro">
                <Link to="/">
                    <h1>Já possui uma conta? Entre!</h1>
                </Link>
            </div>
        </div>
    )
}