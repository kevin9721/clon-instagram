import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import Perfil from "./Descripcion/Perfil";

export default function Modal1({ data, showModal, setShowModal }) {
    const { id } = useParams(); // Obtener el parámetro 'id' de la URL
    const idDelGato = Number(id) - 1; // Convertir 'id' a número y ajustar para acceder al índice correcto
    const { imageUrl, altText, username } = data[idDelGato] || {}; // Obtener datos del gato según el 'id' usando destructuring

    // Componente 'VistaModal' para mostrar el modal
    const VistaModal1 = ({ isOpen, onClose }) =>
        isOpen && (
            <>
                <div className="modal-overlay">
                    <div className="modal1">
                        <img className= "image"src={imageUrl} alt={altText} />
                        <div className="modal-r">
                            <Perfil imageUrl={imageUrl} username={username} />
                         
                           
                        </div>
                        <button onClick={onClose}>X</button>
                    </div>
                </div>
            </>
        );

    return (
        <>
            {showModal &&
                createPortal(
                    <VistaModal1
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                    />,
                    document.body
                )}
        </>
    );
}
