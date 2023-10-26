import { Outlet, NavLink } from "react-router-dom";
import Logo from "../assets/Nav-images/instagram.png";
import Inicio from "../assets/Nav-images/home.png";
import Busqueda from "../assets/Nav-images/busqueda.png";
import Explorar from "../assets/Nav-images/explorar.png";
import Reels from "../assets/Nav-images/reel.png";
import Mensajes from "../assets/Nav-images/mensaje.png";
import Notificacion from "../assets/Nav-images/notificaciones.png";
import Crear from "../assets/Nav-images/crear.png";
import Mas from "../assets/Nav-images/menu.png";

function Nav() {
  return (
    <div className=" Principal">
      {/* En este componente vemos el marcado para los links de navegacion. */}
      <nav>
        <ul>
          <li className="elemento">
            <NavLink to="/"><img className="logo" src={Logo} alt="" />
            </NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'is-active' : 'Navlink';
            }} to="/"><img src={Inicio} alt="" /><p>Inicio</p></NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'is-active' : 'Navlink';
            }} to="/Busqueda"><img src={Busqueda} alt="" /><p>Buscar</p></NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'is-active' : 'Navlink';
            }} to="/Explorar"><img src={Explorar} alt="" /><p>Explorar</p></NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'is-active' : 'Navlink';
            }} to="/Reels"><img src={Reels} alt="" /><p>Reels</p></NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'is-active' : 'Navlink';
            }} to="/Mensajes"><img src={Mensajes} alt="" /><p>Mensajes</p></NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'is-active' : 'Navlink';
            }} to="/Notificacion"><img src={Notificacion} alt="" /><p>Notificacion</p></NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'is-active' : 'Navlink';
            }} to="/Crear"><img src={Crear} alt="" /><p>Crear</p></NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'is-active' : 'Navlink';
            }} to="/Perfil"><img src="" alt="" /><p>Perfil</p></NavLink>
          </li>
          <li className="elemento">
            <NavLink className={({ isActive }) => {
              return isActive ? 'isActivePlus' : 'NavlinkPlus';
            }} to="/Mas"><img src={Mas} alt="" /><p>Mas</p></NavLink>
          </li>
        </ul>
      </nav>
          <div className="linea-vertical"></div>

      {/* Un <Outlet> representa lo que sea que la ruta secundaria/anidada actualmente activa, 
        así que puedes pensar en este <Outlet> como un marcador de posición para las 
        rutas secundarias que definimos arriba. */}
      <Outlet />
    </div>
  );
}

export default Nav;
