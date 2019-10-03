import React from 'react';

function Clima({resultado}){
    let {name,main}=resultado
    if(!name) return null;
    //restar grados Kelvin
    let Kelvin=273.15

    return(
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>Clima en {name}</h2>
                <p className='temperatura'>
                <span>{(main.temp-Kelvin).toFixed(0)}º</span>
                </p>
                <p>Temperatura Maxima: {(main.temp_max-Kelvin).toFixed(0)}º</p>
                <p>Temperatura Minima: {(main.temp_min-Kelvin).toFixed(0)}º</p>
            </div>
        </div>
    )
}
export default Clima