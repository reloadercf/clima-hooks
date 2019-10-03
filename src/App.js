import React,{useState,useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'
import Clima from './components/Clima'

function App() {

  //state principal 
  let [ciudad, guardarCiudad]=useState('')
  let [pais, guardarPais]=useState('')
  let [error, guardarError]=useState(false)
  let [resultado,guardarResultado]=useState({})

  useEffect(() => {
    //Prevenir ejecucion
    if(ciudad==='')return;
    let consultarAPI=async()=>{
      let appId='bc768e42bdea64aeb0608bbd39874ee4'
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
      let respuesta=await fetch(url)
      let resultadoRes=await respuesta.json()
      guardarResultado(resultadoRes)
    }

    consultarAPI()
  }, [ciudad,pais])
  

  let datosConsulta =datos=>{
    //validar que ambos campos esten
    if(datos.ciudad===''||datos.pais===''){
      //error
      guardarError(true)
      return;
    }
    //ciudad y pais existen, agregalos al state
    guardarCiudad(datos.ciudad)
    guardarPais(datos.pais)
    guardarError(false)
  }

 

  //Cargar un componente condicionalmente
  let componente;
  if(error){
    //hay un error, mostrarlo
    componente=<Error mensaje='Ambos campos son obligatorios' />
  }else if(resultado.cod==='404'){
    componente=<Error mensaje='La ciudad no existe en nuestro registro' />
  }
  else{
    //mostrar el clima
    componente=<Clima 
                resultado={resultado}
                />
  }

  return (
    <div className='App'>
      <Header 
      titulo='Clima React APP'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m6'>
              <Formulario
              datosConsulta={datosConsulta}
              />

            </div>
            <div className='col s12 m6'>
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
