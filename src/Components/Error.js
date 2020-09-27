import React from 'react'
import styled from '@emotion/styled';



//Styles 

const MensajeError = styled.p`

display:block;
width:100%;
font-family: "Bebas Neue" , cursive ;
text-transform:uppercase;
font-size:2rem;
color:#fff;
background-color:red;
text-align:center;
padding:1rem;
border-radius:5px;

`;

const Error = ({mensaje}) => {
    return (
    <MensajeError>{mensaje}</MensajeError>
    )
}

export default Error
