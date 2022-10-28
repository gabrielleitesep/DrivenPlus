import { useContext, useState } from "react"
import UserContext from "../context/context"
import { useEffect } from "react"
import axios from "axios"
import Plano from "./Plano"


export default function Planos() {

    const { dados} = useContext(UserContext)
    const [pacote, setPacote] = useState([])
    const config = { headers: { Authorization: `Bearer ${dados.token}` } }

    useEffect(() => {
        
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
        promise.then(res => {

            console.log(res.data);
            setPacote(res.data)
        })

        promise.catch(err => console.log(err.response.data.message))

    }, [])


    return (

        <div className="containerPaginaEscolha">
            <div className="containerEscolha">
                <h1>Escolha seu Plano</h1>
            </div>
            <div className="containerButtonsEscolha">
                {pacote.map((p, index) => <Plano info={ p } key={ index } /> )}
            </div>
        </div>
    )
}