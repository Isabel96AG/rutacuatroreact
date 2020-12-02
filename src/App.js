
import './App.css';
import Enlaces from './enlaces';
import jugadores from './equipo';
import {BrowserRouter, Route} from 'react-router-dom';
import Tres from './todos';

const Jugador=(props)=>{
  return (
      <>
        <h2>{props.nombre}</h2>
          <img src={props.imagen}alt=""/>
         <h3>posicion:{props.posicion}</h3>
         </>
  );
}




function App() {
  return (
  <BrowserRouter>
   <Enlaces equipo={jugadores}/>
   <Route exact path="/">

   </Route>
   <Route exact path="/equipo">
     <Tres equipo={jugadores} />
     
     </Route>
     <Route exact path="/primerjugador">
     <Jugador nombre={jugadores[0].nombre} imagen={jugadores[0].imagen} posicion={jugadores[0].posicion}/>
     
     </Route>
     <Route exact path="/segundojugador">
     <Jugador nombre={jugadores[1].nombre} imagen={jugadores[1].imagen} posicion={jugadores[1].posicion}/>
     
     </Route>
     <Route exact path="/tercerjugador">
     <Jugador nombre={jugadores[2].nombre} imagen={jugadores[2].imagen} posicion={jugadores[2].posicion}/>
     
     </Route>
   
   
   
   
  
  
  
  
  </BrowserRouter>
  );
}

export default App;
