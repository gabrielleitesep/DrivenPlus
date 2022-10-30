import imgSeta from "../assets/Setinha.png"
import imgDinheiro from "../assets/Dinheiro.png"
import imgPrancheta from '../assets/Prancheta.png'
import Cartao from "./Cartao"
import axios from "axios"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import UserContext from "../context/useContext"
import PlanContext from "../context/planContext"



export default function Assinatura() {

    const { dados } = useContext(UserContext)
    const { setPlanData } = useContext(PlanContext)
    const [dadosPlano, setDadosPlano] = useState('')
    const { id } = useParams()
    const config = { headers: { Authorization: `Bearer ${dados.token}` } }
    const [beneficios, setBeneficios] = useState('')
    const [preco, setPreco] = useState('')


    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config)
        promise.then(res => {

            console.log(res.data);
            setDadosPlano(res.data)
            setBeneficios(res.data.perks);
            setPreco(res.data.price)
            setPlanData(res.data)
        },)

        promise.catch(err => console.log(err.response.data.message))

    }, [])





    return (
        <div className="containerAssinatura">
            <div className="setinha">
                <Link to="/subscriptions">
                    <img src={imgSeta} alt="botão para voltar a rota" />
                </Link>
            </div>
            <div className="containerLogoPlano">
                <img src={dadosPlano.image} alt="emblema do plano" />
                <h1>Driven Plus</h1>
            </div>
            <div className="containerAJUSTE">
                <div className="containerBeneficios">
                    <img src={imgPrancheta} alt="badge prancheta" />
                    <h1>Benefícios:</h1>
                </div>
                <div className="containerListaBeneficios">
                    {beneficios.length === 0 ? "" : beneficios.map((b) => <h1 key={b.id}>- {b.title}</h1>)}
                </div>
                <div className="containerPreço">
                    <img src={imgDinheiro} alt="badge dinheiro" />
                    <h1>Preço:</h1>
                </div>
                <div className="containerListaPreço">
                    <h1>R$ {preco} cobrados mensalmente</h1>
                </div>
            </div>
            <Cartao />
        </div>
    )
}