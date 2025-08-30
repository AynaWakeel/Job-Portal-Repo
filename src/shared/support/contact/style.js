import styled from "styled-components";
import { devices } from "../../../components/breakpoints";

export const Overlay = styled.div`
padding-block: 100px;
padding-inline: 120px;

@media ${devices.tablet}{
    padding-block: 50px;
    padding-inline: 40px;
}

@media ${devices.mobile}{
    padding-block: 30px;
    padding-inline: 20px;
}
`

export const Section = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media ${devices.tablet}{
    flex-direction: column;
    align-items: start;
    gap: 50px;
}

@media ${devices.mobile}{
    flex-direction: column;
     align-items: start;
    gap: 40px;
}

.sec-content{
    width: 40%;

    @media ${devices.tablet}{
        width: 70%;
    }
    
    @media ${devices.mobile}{
        width: 100%;
    }
}

.sec-form{
    width: 44%;
    display: flex;
    justify-content: start;
    align-items: center;

    @media ${devices.tablet}{
        width: 70%;
    }
    
    @media ${devices.mobile}{
        width: 100%;
    }
}

.H4{
font-size: 16px;
font-family: var(--inter);
font-weight: 500;
color: var(--purple-600);
padding-top: 12px;
}

.H2{
font-size: 48px;
font-family: var(--inter);
font-weight: 500;
color: #18191C;
padding-block: 12px;
@media ${devices.tablet}{
    font-size: 35px;
}

@media ${devices.mobile}{
    font-size: 25px;
}
}

.para{
font-size: 18px;
font-family: var(--inter);
font-weight: 400;
color: #474C54;
padding-top: 12px;
text-align: justify;
padding-bottom: 20px;
}

.Btn{
    background-color: var(--purple-600);
    color: var(--white-50);
    outline: none;
    border: none;
    padding-block: 16px;
    padding-inline: 24px;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}
`


export const Form = styled.div`
margin-top: 10px;
margin-inline: auto;
padding-block: 30px;
padding-inline: 35px;
border-radius: 8px;
box-shadow: 0px 0px 15px var(--purple-50);
   
    @media ${devices.mobile}{
        padding-block: 24px;
        padding-inline: 18px;
    }

.FormH1{
font-size: 22px;
font-family: var(--inter);
font-weight: 500;
color: #18191C;
padding-bottom: 20px;
}

.FormSpace{
   padding-block: 5px;
}

.FormInputDivide{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.FormInput{
    outline: none;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    padding-block: 16px;
    padding-inline: 20px;
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);
}

.FormInput::placeholder{
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
}

.FormBtn{
    background-color: var(--purple-600);
    color: var(--white-50);
    outline: none;
    border: none;
    width: 100%;
    padding-block: 16px;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}

`