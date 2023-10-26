import gatoUno from "../assets/images/gato1.png";
import publicacion from "../assets/iconos-perfil/icons8-cuadrícula-30.png"
import './HomePage.css';
import Modal from "../components/Modal";
import Modal1 from "../components/Modal1";
import { useState } from "react";
import gatoDos from "../assets/images/gato2.png";
import gatoTres from "../assets/images/gato3.png";
import BotonesPerfil from "../components/botonesPerfil/Botones";
import Favorito from "../assets/iconos-perfil/icons8-favorito-50.png"
import Etiquetadas from "../assets/iconos-perfil/icons8-nombre-50.png"
import Historia from "../components/Historias/Historias";
import Footer from "../components/footer/footer";
function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const openModal1 = () => {
    setShowModal1(true);
  };
  const data = [
    {
      id: 1,
      imageUrl: gatoUno,
      altText: "Imagen 1",
      username: "Kevin_Urrutia",
      name: "Kevin Urrutia",
      desciption: "loremddd",
      seguidores: "26",
      seguidos: "45",
    },

  ];

  const Data1 = [
    {
      id: 1,
      imageUrl: gatoUno,
      altText: "Imagen 1",
      username: "Kevin_Urrutia",
      desciption: "loremddd",
      hora: "2h",
    },
    {
      id: 2,
      imageUrl: gatoDos,
      altText: "Imagen 2",
      username: "Kevin_Urrutia",
      desciption: "loremddd",
      hora: "2h",
    },
    {
      id: 3,
      imageUrl: gatoTres,
      altText: "Imagen 3",
      username: "Kevin_Urrutia",
      desciption: "loremddd",
      hora: "2h",
    },
  ];
  return (
    <div className="inicio">
      {data.map((image) => (
        <div className="perfil-info" key={image.id}>
          <img src={image.imageUrl} alt="" />
          <div className="header-principal1">
            <div className="header-perfil">
              <h6>{image.username}</h6>
              <div className="header-botones">
                <BotonesPerfil texto="Editar Perfil" />
                <BotonesPerfil texto="Ver archivo" />
              </div>
            </div>
            <div className="header-seguidores">
              <p>{image.seguidos} publicaciones</p>
              <p>{image.seguidos} Seguidos</p>
              <p>{image.seguidores} Seguidores</p>
            </div>
            <div className="header-name">
              <h6>{image.name}</h6>
              <p>{image.desciption}</p>
            </div>
          </div>

        </div>
      ))}

      {data.map((image) => (
        <div key={image.id} onClick={openModal1}>
          <Historia
            action={() => setShowModal(true)}
            imageUrl={image.imageUrl}
          />
        </div>

      ))}



      <hr />
      <div className="banner">
        <button className="banner-perfil">
          <img src={publicacion} alt="icono publicación" />
          <p>Publicaciones</p>
        </button>
        <button className="banner-perfil">
          <img src={Favorito} alt="icono publicación" />
          <p>Guardado</p>
        </button>
        <button className="banner-perfil">
          <img src={Etiquetadas} alt="icono publicación" />
          <p>Etiquetadas</p>
        </button>
      </div>


      <div className="publicaciones">

        {
          Data1.map((image) => (
            <div key={image.id} className="publicada-perfil">
              <button className="publicacion-perfil">
                <img src={image.imageUrl} alt="" />
              </button>
            </div>
          ))
        }
      </div>

      <div >
        <Footer />
      </div>
      <Modal1 data={data} showModal={showModal1} setShowModal={setShowModal1} /> {/* Renderiza Modal1 */}
    </div>
  );
}
export default HomePage;