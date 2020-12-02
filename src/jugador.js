const Jugador=(props)=>{
    return (
        <>
          <h2>{props.nombre}</h2>
            <img src={props.imagen}alt=""/>
           <h3>posicion:{props.posicion}</h3>
           </>
    )
}