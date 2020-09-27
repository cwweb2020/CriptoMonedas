import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled'

// Importando el Imagen de Cripto-Monedas
import imagen from './cryptomonedas.png'
//Import Componentes
import Formulario from './Components/Formulario';
import axios from 'axios';
import Cotizar from './Components/Cotizar';
import Spinner from './Components/Spinner'






// Styles 

const Contenedor = styled.div`

max-width:900px;
margin: 0 auto ;

@media (min-width:992px){

  display:grid;
  grid-template-columns:repeat(2, 1fr) ;
  column-gap:2rem;
}
`;


const Imagen = styled.img`

max-width:100%;
margin-top:5rem;

`;

const Heading = styled.h1`

  font-family: 'Bebas Neue' , cursive;
  color:#fff;
  text-align:left;
  font-weight:700;
  font-size:50px;
  margin-bottom:50px;
  margin-top:80px;

  &::after {

    content:'';
    width:200px;
    height:6px;
    background-color: #66A2FE;
    display:block;
  }


`;




function App() {

  //Creando state para moneda y criptomoneda y para resultado

  const [moneda , guardarMoneda] = useState('')
  const [criptoMoneda , guardarCriptoMoneda] = useState('')
  const [resultado , guardarResultado] = useState({});

  // State para controlar el Spinner 

  const [ cargando , guardarCargando] = useState(false)


  // Uso de Use Effect 


  useEffect (()=>{

    const cotizandoConApi = async () => {

      // Corto la primera ejecucion 
      if(moneda==="")return;


      // consulto con Api 

       const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`

       const response = await axios.get(url)
       guardarCargando(true)

       setTimeout(()=>{

        guardarCargando(false)


        guardarResultado(response.data.DISPLAY[criptoMoneda][moneda])


       },5000)

       

        
    }
    
    cotizandoConApi();

    

  },[moneda,criptoMoneda])



  const component = (cargando ? <Spinner/> : <Cotizar resultado={resultado}/>)


  return (

    <Contenedor>
      <div>

        <Imagen
            src={imagen}
        />

      </div>



      <div>

      <Heading>Cotiza Cripto-Monedas al Instante</Heading>

      <Formulario

      guardarMoneda={guardarMoneda}
      guardarCriptoMoneda={guardarCriptoMoneda}


      
      />

      {component}

      


      </div>


    </Contenedor>

  );
}

export default App;
