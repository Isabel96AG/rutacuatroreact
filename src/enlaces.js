import { Link} from 'react-router-dom';
function Enlaces() {
    return (
    <div>
      <ul>
             <li>
            
              <Link to="/">Inicio</Link>
            </li>
            <li>
            
              <Link to="/equipo">Equipo</Link>
            </li>
            <li>
            
            <Link to="/primerjugador">Jugador Uno</Link>
          </li>
          <li>
            
            <Link to="/segundojugador">Jugador Dos</Link>
          </li>
          <li>
            
            <Link to="/tercerjugador">Jugador Tres</Link>
          </li>
            </ul>
        </div>
        
        );
    }
    export default Enlaces;