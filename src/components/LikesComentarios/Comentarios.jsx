// import { FiMoreHorizontal } from 'react-icons/fi';
// import { VscCircleSmallFilled } from 'react-icons/vsc';
import { BsEmojiSmile } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import './Comentarios.css'
const Comentarios = () => {
    return(
        <div className="fake-comment" >
        <input placeholder="Añadir un comentario..." />
        <IconContext.Provider value={{ size: '12px' }}>
            <div className=" emoji">
                <BsEmojiSmile />
            </div>
        </IconContext.Provider>
    </div>
    )
   
}

export default Comentarios;