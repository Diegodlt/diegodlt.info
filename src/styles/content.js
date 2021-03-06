import styled from "styled-components"

export const Content = styled.div`
    max-width: 700px;
    margin: auto;
    font-family: 'Open Sans';
    font-size: 20px;
    padding: 0 20px;
    h1{
        font-family: 'Raleway';
        font-size: 40px;
        padding: 30px 0 29px 0;
    }
    @media(max-width: 767px){
        font-size: 18px;
        h1{
            font-size: 22px;
        }
    }

`