import React from 'react'
import styled from '@emotion/styled';


// Styles 

const MainContainer = styled.div`

display:flex;
flex-direction:column;
background-color:#fff;
color:#000;
border:1px solid #000;
width:100%
padding:2rem;
margin:2rem 0rem;
justify-content:center;
text-align:center;
font-family: 'Bebas Neue' , cursive;
 

`;


const Precio = styled.p`

font-size:34px;
padding:10px;
border-bottom:1px solid #000;

span {

    font-size:46px;
    font-weight:bold;
    color:green;
    

}
`;




const Info = styled.p`

font-size:20px;
padding:10px;
border-bottom:1px solid red;
martgin-top:10px;


span {

    font-size:24px;
    font-weight:bold;
    

}
`;

const Cotizar = ({resultado}) => {


    if(Object.keys(resultado).length < 1) return null



    return (
        <MainContainer>

            <Precio>Precio hoy es :  <span>{resultado.PRICE}</span> </Precio>
            <Info>Precio mas alto del dia :  <span>{resultado.HIGHDAY}</span> </Info>
            <Info>Precio mas bajo del dia :  <span>{resultado.LOWDAY}</span> </Info>
            <Info>Variacion ultimas 24 hs:  <span>{resultado.CHANGEPCTHOUR}</span> </Info>
            <Info>Ultima actualizacion :  <span>{resultado.LASTUPDATE}</span> </Info>
            
            
        </MainContainer>
    )
}

export default Cotizar
