import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import Cadastro from './Cadastro'
import Plano from './Plano'
import Planos from './Planos'
import Home from './Home'
import UserContext from "../context/context"
import { useState, useEffect } from "react"


export default function App() {

    const [dados, setDados] = useState('')
    const dadosStorage = window.localStorage.getItem('index')

    useEffect(() => {
        if(dadosStorage !== null){
            setDados(JSON.parse(dadosStorage))
        }
    }, [] )

    return (

        <>

            <BrowserRouter>
                <UserContext.Provider value={{dados, setDados}}>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/sign-up' element={<Cadastro />} />
                        <Route path='/subscriptions' element={<Planos />} />
                        <Route path='/subscriptions/:id' element={<Plano />} />
                        <Route path='/home' element={<Home />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}