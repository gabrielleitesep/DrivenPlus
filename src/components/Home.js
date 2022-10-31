
import { Link } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../context/useContext"
import PlanContext from "../context/planContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Home() {

    const { dados } = useContext(UserContext)
    const { planData } = useContext(PlanContext)
    const config = { headers: { Authorization: `Bearer ${dados.token}` } }
    const navigate = useNavigate()

    function cancelaPlano() {

        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config)

        promise.then(res => {

            console.log(res.data)
            navigate("/subscriptions")
        })
        promise.catch(err => {

            console.log(err.response.data.message)
            alert("Erro no servidor!")
        })
    }

    return (
        <div className="containerHome">
            <div className="containerHeader">
                <img src={planData.image} alt="botão para voltar a rota" />
            </div>
            <div className="containerHeaderNome">
                <h1>Olá, {dados.name}</h1>
            </div>
            <div className="containerBotoesPlano">
            {planData.perks === undefined ? "" : planData.perks.map((b, index) => <a key={index} href={b.link}><button key={index}>{b.title}</button></a>)}
            </div>
            <div className="containerBotoesFixo">
                <Link to="/subscriptions">
                    <button >Mudar plano</button>
                </Link>
                <button onClick={() => cancelaPlano()}>Cancelar plano</button>
            </div>
        </div>
    )
}