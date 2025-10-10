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

.sec-img{
    width: 30%;

@media ${devices.tablet}{
    width: 60%;
}

@media ${devices.mobile}{
    width: 100%;
}
}

.sec-img img{
    width: 100%;
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
