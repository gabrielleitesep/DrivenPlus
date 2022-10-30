import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../context/useContext";


export default function Cartao() {

    const [nomeC, setNomeC] = useState('')
    const [numeroC, setNumeroC] = useState('')
    const [codigoS, setCodigoS] = useState('')
    const [validade, setValidade] = useState('')
    const { id } = useParams()
    const { dados } = useContext(UserContext)
    const config = { headers: { Authorization: `Bearer ${dados.token}` } }
    const navigate = useNavigate()

    const body = {

        membershipId: id,
        cardName: nomeC,
        cardNumber: numeroC,
        securityNumber: codigoS,
        expirationDate: validade
    }

    function pagamento(e) {
        e.preventDefault()

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", body, config)
        promise.then(res => {

            console.log(res.data);
            navigate("/home")
        })
        promise.catch(err => {

            console.log(err.response.data.message)
            alert("Dados inválidos!")
        })
    }

    return (
        <div className="containerCartao">
            <div className="containerInput">
                <form onSubmit={pagamento}>
                    <input placeholder="Nome impresso no cartão" type="text" onChange={e => setNomeC(e.target.value)} required></input>
                    <input placeholder="Digitos do cartão" type="text" onChange={e => setNumeroC(e.target.value)} required></input>
                    <input placeholder="Código de segurança" type="text" onChange={e => setCodigoS(e.target.value)} required></input>
                    <input placeholder="Validade" type="text" onChange={e => setValidade(e.target.value)} required></input>
                    <button type="submit" >Assinar</button>
                </form>
            </div>
        </div>
    )
}