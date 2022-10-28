import { Link } from "react-router-dom";

export default function Plano({ info }) {

    return (
        <>
            <Link to={`/subscriptions/${info.id}`}>
                <div className="button">
                    <img src={info.image} alt="foto do tipo de plano" />
                    <h2>R$ {info.price}</h2>
                </div>
            </Link>
        </>
    )
}