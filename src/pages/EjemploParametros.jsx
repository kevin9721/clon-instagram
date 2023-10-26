import { useState } from "react";
import Miniatura from "../components/Miniatura";
import gatoUno from "../assets/images/gato1.png";
import gatoDos from "../assets/images/gato2.png";
import gatoTres from "../assets/images/gato3.png";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Modal1 from "../components/Modal1"; // Importa el componente Modal1
import './ejemplo.css'
import Botones from "../components/Botones/Botones";
import Descripcion from "../components/Descripcion/Descripcion";
import Comentarios from "../components/LikesComentarios/Comentarios";
import Historias from "../components/Historias/Historias";
import Perfil from "../components/Descripcion/Perfil";

function EjemploParametros() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false); // Agrega estado para el modal Modal1

  const data = [
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

  // Función para abrir Modal1
  const openModal1 = () => {
    setShowModal1(true);
  };

  return (
    <div className="publicacion">
      <div className="historias">
        {data.map((image) => (
          <div className="Historias" key={image.id} onClick={openModal1}>
            {/* Abre Modal1 cuando haces clic en las historias */}
            <Historias
              action={() => setShowModal(true)}
              imageUrl={image.imageUrl}
              altText={image.altText}
              user={image.username}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="galeria">
          {data.map((image) => (
            <div key={image.id}>
              <Perfil imageUrl={image.imageUrl} username={image.username} hora={image.hora} />
              <Miniatura
                className="thumbnail"
                action={() => setShowModal(true)}
                imageUrl={image.imageUrl}
                altText={image.altText}
              />
              <Botones
                className="thumbnail"
                action={() => setShowModal(true)}
                imageUrl={image.imageUrl}
                id={image.id}
              />
              <Descripcion username={image.username} description={image.desciption} />
              <Comentarios />
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Modal data={data} showModal={showModal} setShowModal={setShowModal} />
      <Modal1 data={data} showModal={showModal1} setShowModal={setShowModal1} /> {/* Renderiza Modal1 */}
    </div>
  );
}

export default EjemploParametros;
