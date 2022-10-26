import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import Cadastro from './Cadastro'
import Plano from './Plano'
import Planos from './Planos'
import Home from './Home'

export default function App() {

    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/sign-up' element={<Cadastro/>} />
                    <Route path='/subscriptions' element={<Planos/>} />
                    <Route path='/subscriptions/ID_DO_PLANO' element={<Plano/>} />
                    <Route path='/home' element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}