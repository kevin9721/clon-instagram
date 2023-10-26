import './App.css'
import RoutesWrapper from './router/Enrutador'
import Nav from './components/Navegacion'
function App() {
  return (
    <div className='paginas'>
     {/* Envolvemos la aplicación con 'RoutesWrapper' para el enrutamiento */}
     <RoutesWrapper>
        {/* Renderizamos el componente de navegación 'Nav' */}
        <Nav />
      </RoutesWrapper>
    </div>
  )
}


export default App
