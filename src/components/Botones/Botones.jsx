 import megusta from './megusta.png';
import nomegusta from './nomegusta.png';
 import burbuja from './burbuja.png';
 import enviado from './enviado.png';
import favorito from './favorito.png';
 import nofavorito from './nofavorito.png';
 import { Link } from 'react-router-dom';
// import { FiMoreHorizontal } from 'react-icons/fi';
// import { VscCircleSmallFilled } from 'react-icons/vsc';
// import { BsEmojiSmile } from 'react-icons/bs'
// import { IconContext } from 'react-icons/lib'
import './Botones.css'
import { useState } from 'react';
const Botones = ({ imageUrl, id, action }) => {
    const [Guardar, setGuardar] = useState(false);

    const [Megusta, setMegusta] = useState(false);
const toggleMegusta = () => {
    setMegusta(!Megusta)
}

const toggleGuardar = () => {
    setGuardar(!Guardar)
}



    return (
      <div>
        <section className='reacciones'> 
        <div>
        <button onClick={toggleMegusta}>
            <img src={Megusta ? megusta : nomegusta} alt="Me gusta" />
        </button>
        <Link to={`/modal/${id}`}>
        <button onClick={action}>
            <img src={burbuja} alt="Me gusta" />
        </button>
        </Link>
        <button >
            <img src={enviado} alt="Me gusta" />
        </button>
        </div>
       <div>
        <button onClick={toggleGuardar}>
            <img src={Guardar ? favorito : nofavorito} alt="" />
        </button>
       </div>
        </section>
      </div>
      
    );
  };
  

export default Botones