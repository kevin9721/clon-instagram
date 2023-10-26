import { Link } from "react-router-dom";
import './Descripcion.css'

const Descripcion = ({ username, description }) => {
    return (
        <div>
            <section className='desciption'>
                <Link to={'/Perfil'}>
                    <h6 to>{username}</h6>
                </Link>
                <span>{description}</span>
            </section>
        </div>
    );
}

export default Descripcion;