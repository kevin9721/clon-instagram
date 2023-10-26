import { Link } from "react-router-dom";
import './Perfil.css'
import { FiMoreHorizontal } from 'react-icons/fi';
 import { VscCircleSmallFilled } from 'react-icons/vsc';

const Perfil = ({ imageUrl,username, hora }) => {
    return (
        <div>
            <section className="Perfil-card">
                <Link className='perfil' to={'/Perfil'}>
                    <img src={imageUrl} alt="" srcset="" />
                    <h6 to>{username}</h6>
                    <VscCircleSmallFilled/>
                    <span>{hora}</span>
                </Link>
                <FiMoreHorizontal/>
            </section>
        </div>
    );
}

export default Perfil;