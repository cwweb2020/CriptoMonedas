import React,{useState,useEffect} from 'react'
import styled from '@emotion/styled';

// Import Hooks
import useMoneda from '../hooks/useMoneda'
import useCrypto from '../hooks/useCrypto'
import axios from 'axios';
import Error from './Error';


//Styles

const Boton = styled.button`

    margin-top:20px;
    font-weigth:bold;
    font-size:20px;
    padding:10px;
    background-color:#66A2FE;
    border:none;
    width:100%;
    border-radius:10px;
    color:#fff;
    transition: background-color .3s ease;

    &:hover{

        background-color:#326AC0;
        cursor:pointer;
    }

`;

const Formulario = ({guardarMoneda ,guardarCriptoMoneda}) => {

    //State de Criptomonedas 

    const [listaCripto , guardarCripto ] = useState([]);

    // State de Error para validacion 

    const [error , guardarError] = useState(false)


    // Opciones de Billetes

    const opciones = [

        {codigo:"USD" , nombre:"Dollar de USA"},
        {codigo:"ARS" , nombre:"Peso Argentino "},
        {codigo:"EUR" , nombre:"Euro"},
        {codigo:"GBP" , nombre:"Libra Esterlina"},
        {codigo:"CAD" , nombre:"Dollar Canadiense"},
    ]



    //Utilizo el useMonedas

    const [moneda , SelectMoneda , ] = useMoneda('Elige tu moneda', "", opciones)

    // Utilizo el useCrypto 

    const [crypto , SelectCrypto] = useCrypto('Elige la Cripto-Moneda',"",listaCripto)


    // haciendo llamado a Api 

    useEffect(()=> {

        const consultarApi =  async () => {

            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

            const cripto = await axios.get(url)

            guardarCripto(cripto.data.Data)

        }
        consultarApi();
    },[])



    // Funcion onSubmit del form 

    const cotizarMoneda = e => {

        e.preventDefault();

        // validar 

        if(moneda === "" || crypto === "") {

            guardarError(true)
            return
            
        }


        // pasar el informacion al componente principal (App.js)

        guardarError(false)
        guardarMoneda(moneda)
        guardarCriptoMoneda(crypto)



        
    }




    return (
        <div>
   
   
           
            
           <form
                onSubmit={cotizarMoneda}
           >

            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null  }

           

               <SelectMoneda/>
               <SelectCrypto/>

            <Boton type="submit">Cotizar</Boton>

           </form> 
        </div>
    )
}

export default Formulario
