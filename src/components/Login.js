import { Link } from "react-router-dom"
import imgLogo from "../assets/Driven+.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useContext } from "react";
// import  UserContext  from "./UserContext";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    // const {setUser} = useContext(UserContext)

    function fazerLogin (e){
        e.preventDefault()
        const body ={
            email: email,
            password: password
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", body)
        promise.then (res => {

            console.log(res.data);
            // setUser(res.data)
            navigate("/home")
        })
        promise.catch(err => console.log(err.response.data.message))
    }

    return (
        <div className="containerLogin">
            <div className="containerLogo">
                <img src={imgLogo} alt="logo do site" />
            </div>
            <div className="containerInput">
                <form onSubmit={fazerLogin}>
                    <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}  required></input>
                    <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                    <button type="submit" >ENTRAR</button>
                </form>
            </div>
            <div className="containerCadastro">
                <Link to="/sign-up">
                    <h1>Não possui uma conta? Cadastre-se!</h1>
                </Link>
            </div>
        </div>
    )
}