import imgPlano1 from "../assets/Plano1.png"
import imgPlano2 from "../assets/Setinha.png"

export default function Home() {
    return (
        <>
            <div className="containerHeader">
                <img src={imgPlano1} alt="botão para voltar a rota" />
                <img src={imgPlano2} alt="botão para voltar a rota" />
                <h1>Olá, fulano</h1>
            </div>
            <div className="containerHeaderNome">
                <h1>Olá, fulano</h1>
            </div>
            <div className="containerpagina">
                <div className="containerBotoesPlano">
                    <button >Solicitar brindes</button>
                </div>
                <div className="containerBotoesFixo">
                    <button >Mudar plano</button>
                    <button >Cancelar plano</button>
                </div>
            </div>
        </>
    )
}