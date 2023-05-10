import React, { useState } from 'react';

// Definiendo estilos enconstantes:

// ? Estilo para usuario logueado

const activeStyle = {
    color: 'cyan'
};

// ? Estilo para usuario no logueado

const unactiveStyle = {
    color: 'tomato',
    fontWeigth: 'bold'
}

const ClockStyled = (props) => {

    // ? Generamos un estado para el componente 
    // ? y asi controlar el usuario no logueado

    const [active, setActive] = useState(false)
    const saludo = (<p>Hola, {props.nombre}</p>)
    const requisito = (<p>Da Click Para Continuar</p>)


    return (
        <div style={active ? activeStyle : unactiveStyle}>
            {active ?

            saludo
            :
            requisito
            }

            <button onClick={() => {
                console.log('Boton Pulsado');
                setActive(!active);
            }}>
                {active ? 'Salir' : 'Registrate'}
            </button>

        </div>
    );
}

export default ClockStyled;