import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { FiMoreHorizontal } from 'react-icons/fi';
import { VscCircleSmallFilled } from 'react-icons/vsc';
import { BsEmojiSmile } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import './Publicacion.css';
import Botones from '../Modal3/botones';
import megusta from './megusta.png';
import nomegusta from './nomegusta.png';
import burbuja from './burbuja.png';
import enviado from './enviado.png';
import favorito from './favorito.png';
import nofavorito from './nofavorito.png';
import Modal from '../modal/Modal';

function Publicacion() {
    const [modalData, setModalData] = useState({
        isOpen: false,
        userData: null,
        userPhoto: null,
        userComments: [],
    });

    const [userData, setUserData] = useState([]);
    const [photoData, setPhotoData] = useState([]);
    const [userComments, setCommentsData] = useState([]);
    const [meGustaActivo, setMeGustaActivo] = useState(false);
    const [favoritoActivo, setFavoritoActivo] = useState(false);
    const [count, setCount] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal

    const usersData = useFetch('https://jsonplaceholder.typicode.com/users');
    const photosData = useFetch('https://jsonplaceholder.typicode.com/photos');
    const commentsData = useFetch('https://jsonplaceholder.typicode.com/comments');

    useEffect(() => {
        if (usersData.data) {
            setUserData(usersData.data);
        }
    }, [usersData.data]);

    useEffect(() => {
        if (photosData.data) {
            setPhotoData(photosData.data);
        }
    }, [photosData.data]);

    useEffect(() => {
        if (commentsData.data) {
            setCommentsData(commentsData.data);
        }
    }, [commentsData.data]);

    const openModal1 = (user, userPhoto, userComments) => {
        setModalData({
            isOpen: true,
            userData: user,
            userPhoto: userPhoto,
            userComments: userComments,
        });
    };

    const closeModal1 = () => {
        setModalData({
            isOpen: false,
            userData: null,
            userPhoto: null,
            userComments: [],
        });
    };

    const toggleMeGusta1 = () => {
        setMeGustaActivo(!meGustaActivo);
        if (!meGustaActivo) {
            setCount((prevCount) => prevCount + 1);
        }
    };

    const toggleMeGusta = () => {
        setMeGustaActivo(!meGustaActivo);
        if (!meGustaActivo) {
            setCount((prevCount) => prevCount + 1);
        } else {
            setCount((prevCount) => prevCount - 1);
        }
    };

    const toggleFavorito = () => {
        setFavoritoActivo(!favoritoActivo);
    };

    return (
        <div>
            <ul>
                {userData.map((user) => {
                    const userPhoto = photoData.find((photo) => photo.albumId === user.id);
                    return (
                        <li key={user.id} className='post'>
                            <div className='header'>
                                <div className='profile'>
                                    <button>
                                        <img src={userPhoto.url} alt={user.username} />
                                        <p>{user.username}</p>
                                        <p>
                                            <VscCircleSmallFilled />
                                            {userPhoto.id}
                                        </p>
                                    </button>
                                    
                                <button >
                                <Botones />   
                                
                                 </button>
                                </div>

                                
                                {userPhoto && (
                                    <img src={userPhoto.url} alt={user.username} className='foto' onClick={toggleMeGusta1} />
                                )}
                            </div>

                            <div className='footer-post'>
                                <div className='footer-reacciones'>
                                    <div className='btn-reacciones'>
                                        <button className={`reacciones ${meGustaActivo ? 'active' : 'no-active'}`} onClick={toggleMeGusta}>
                                            <img src={meGustaActivo ? megusta : nomegusta} alt="Me gusta" />
                                        </button>
                                        <button className='reacciones' onClick={() => openModal1(user, userPhoto, userComments.filter(comment => comment.postId === user.id))}>
                                            <img src={burbuja} alt="Comentarios" />
                                        </button>
                                        <button className="reacciones">
                                            <img src={enviado} alt="Enviado" />
                                        </button>
                                    </div>
                                    <div className="boton-reacciones2">
                                        <button className={`reacciones ${favoritoActivo ? 'active' : 'no-active'}`} onClick={toggleFavorito}>
                                            <img src={favoritoActivo ? favorito : nofavorito} alt="Favorito" />
                                        </button>
                                    </div>
                                </div>

                                <button className='contador'>{count} Me gusta</button>
                                <div>
                                    <p> {userComments.slice(0, 1).map((comment) => (
                                        <div key={comment.id} className="comment">
                                            <p style={{ lineHeight: '1' }} className='description'> <strong className='name'>{user.username} </strong>{comment.body}</p>
                                        </div>))}</p>
                                </div>
                                <div>
                                    {userData.slice(4, 5).map((user) => (
                                        userComments.slice(1, 2).map((comment) => (
                                            <div key={comment.id} className="comment">
                                                <p style={{ lineHeight: '1' }} className='description'>
                                                    <strong className='name'>{user.username}</strong> {comment.body}
                                                </p>
                                            </div>
                                        ))
                                    ))}
                                </div>
                                <div className="fake-comment" >
                                    <input placeholder="Añadir un comentario..." />
                                    <IconContext.Provider value={{ size: '12px' }}>
                                        <div className=" emoji">
                                            <BsEmojiSmile />
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <hr />

                                {modalData.isOpen && (
<Modal isOpen={modalData.isOpen} onClose={closeModal1}>                                        <div className='perfil-modal'>
                                            <img src={modalData.userPhoto.url} alt={modalData.userData.username} />
                                            <div className="contenido-modal">
                                                <div className="profile-modal">
                                                    <img src={modalData.userPhoto.url} alt={modalData.userData.username} />
                                                    <a>{modalData.userData.username}</a>
                                                </div>
                                                <div className="comments">
                                                    {modalData.userComments.map((comment) => (
                                                        <div key={comment.id} className="comment">
                                                            <p>{comment.name}</p>
                                                            <p>{comment.body}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Publicacion;
