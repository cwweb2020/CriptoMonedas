import React,{Fragment,useState} from 'react'

import styled from '@emotion/styled';

//Styles;


const Label = styled.label`


font-family: 'Bebas Neue' , cursive;
color:#fff;
display:block;
font-weight:bold;
font-size:1.8rem;
margin-top:2rem;

`;


const Select = styled.select`

display:block;
width:100%;
padding:1rem;
font-size:1.2rem;
border:none;
border-radius:5px;

`;



const useCrypto = (label,stateInicial,opciones) => {

    //console.log(opciones)

    //State del Custom hook

    const [state,actualizarState] = useState(stateInicial)


    const SelectCrypto = () => (

        <Fragment>
            <Label>{label}</Label>

            <Select
                    onChange={e=>actualizarState(e.target.value)}
                    value={state}
            >
                <option value="">Seleccione</option>

                {opciones.map(opcion => (

                <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    )

    return [state,SelectCrypto,actualizarState]

}

export default useCrypto