const Tres=(props)=>{
    let verEquipo=props.equipo.map(jugador=>{
        return(
            <>
            <h2>{jugador.nombre}</h2>
            <img src={jugador.imagen}alt=""/>
           
            </>
        );
    });
    return verEquipo;
}
export default Tres;