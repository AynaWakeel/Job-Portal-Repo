import styled from "styled-components"
import { devices } from "../../components/breakpoints"

export const AuthDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100vh;

/* ------------- media queries-------------- */
@media ${devices.tablet} {
    display: flex;
    flex-direction: column;
}

/*----------- media queries  --------*/
 @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
}
`

export const ImgSec = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: end;
justify-content: center;
position: relative;

.LoginImg{
    width: 95%;
    height: 96%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}


    @media  ${devices.tablet}{
    display: none;
    }
    
    @media ${devices.mobile} {
       display: none;
    }

    
.logo-flex{
    display: flex;
    justify-content: start;
    gap: 8px;
    align-items: center;
    padding-bottom: 20px;
    position: absolute;
    top: 50px;
    left: 50px;
}

.name{
    font-size: 24px;
font-family: var(--inter);
font-weight: 600;
color: var(--white-50);
}

.Color{
    color: var(--white-50);
}
`

export const FormSec = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
background-color: #fff;
text-align: center;
height: 100%;
margin: auto;
position: relative;


    @media  ${devices.tablet} {
    width: 100%;
    background: linear-gradient(to bottom left, var(--gradient-3), var(--gradient-2), var(--gradient-3));

    }
    
    @media ${devices.mobile} {
    width: 100%;
    background: linear-gradient(to bottom left, var(--gradient-3), var(--gradient-2), var(--gradient-3));

    }

    
.logo-flex{
    display: flex;
    justify-content: start;
    gap: 8px;
    align-items: center;
    padding-bottom: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
    display: none;

    @media ${devices.mobile} {
        display: flex;
    }
     @media ${devices.tablet} {
        display: flex;
    }
}

.name{
    font-size: 24px;
font-family: var(--inter);
font-weight: 600;
color: var(--white-50);
}

.Color{
    color: var(--white-50);
}
`

export const LoginImg = styled.img`
width: 100%;

    
`
