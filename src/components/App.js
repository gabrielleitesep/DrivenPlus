import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import Cadastro from './Cadastro'
import Planos from './Planos'
import Home from './Home'
import UserContext from "../context/useContext"
import PlanContext from "../context/planContext"
import { useState, useEffect } from "react"
import Assinatura from "./Assinatura"


export default function App() {

    const [dados, setDados] = useState('')
    const [planData, setPlanData] = useState('')
    const dadosStorage = window.localStorage.getItem('index')

    useEffect(() => {
        if (dadosStorage !== null) {
            setDados(JSON.parse(dadosStorage))
        }
    }, [])

    return (

        <>
            <BrowserRouter>
                <UserContext.Provider value={{ dados, setDados }}>
                    <PlanContext.Provider value={{ planData, setPlanData }}>
                        <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/sign-up' element={<Cadastro />} />
                            <Route path='/subscriptions' element={<Planos />} />
                            <Route path='/subscriptions/:id' element={<Assinatura />} />
                            <Route path='/home' element={<Home />} />
                        </Routes>
                    </PlanContext.Provider>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}