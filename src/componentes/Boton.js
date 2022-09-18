import React from 'react'

function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }
    return (
      <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
        onClick={ () => props.manejarClick(props.children)}>
        {props.children}  {/*Todo lo que este dentro de Boton va a ser considerado como Children y puede ser usado en todo el componente*/}
      </div>
    );
}

export default Boton;