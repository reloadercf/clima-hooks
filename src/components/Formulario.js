import React from 'react';

function Formulario(){
    let handleChange=e=>{
        //cambiar el state
    }

    return (
        <form>
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>
            <div className='input-field col s12'>
                <select on onChange={handleChange} name='pais'>
                    <option value=''>selecciona un pais</option>
                    <option value='US'>Estados Unidos</option>
                    <option value='MX'>Mexico</option>
                    <option value='AR'>Argentina</option>
                    <option value='CO'>Colombia</option>
                    <option value='CR'>Costa Rica</option>
                    <option value='ES'>España</option>
                    <option value='PE'>Peru</option>
                </select>
            </div>
            <div className='input-field col s12'>
                <input type='submit' className='waves-effect waves-light btn-large btn-block yellow accent-4' value='buscar clima' />
            </div>
        </form>
    )
}
export default Formulario