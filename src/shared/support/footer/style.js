import styled from "styled-components";
import { devices } from "../../../components/breakpoints";

export const Main = styled.div`
padding-inline: 120px;
background-color: #18191C;
display: flex;
flex-direction: column;

@media ${devices.tablet}{
    /* padding-top: 50px; */
    padding-inline: 40px;
}

@media ${devices.mobile}{
    padding-top: 30px;
    padding-inline: 20px;
}
`

export const Top = styled.div`
padding-bottom: 60px;
padding-top: 60px;
display: flex;
justify-content: start;
gap: 150px;
align-items: center;

@media ${devices.tablet}{
justify-content: start;
gap: 50px;
align-items: center;
padding-bottom: 40px;
padding-top: 50px;
}

@media ${devices.mobile}{
padding-block: 20px;
flex-direction: column;
justify-content: start;
gap: 40px;
align-items: start;
}

.logo-sec{
    width: 25%;

@media ${devices.tablet}{
    width: 40%;
}

@media ${devices.mobile}{
    width: 80%;
}
}

.logo-flex{
    display: flex;
    justify-content: start;
    gap: 8px;
    align-items: center;
    padding-bottom: 20px;
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

.para{
font-size: 14px;
font-family: var(--inter);
font-weight: 400;
color: #767F8C;
padding-top: 10px;
}


.title{
font-size: 18px;
font-family: var(--inter);
font-weight: 400;
color: #767F8C;
padding-top: 10px;
}

.sub{
font-size: 18px;
font-family: var(--inter);
font-weight: 400;
color: var(--white-50);
}

.flex-list{
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 140px;


    @media ${devices.tablet}{
    justify-content: center;
    gap: 50px;
    }

    @media ${devices.mobile}{
    flex-direction: column;
    gap: 30px;
    }
}

.list h4{
font-size: 18px;
font-family: var(--inter);
font-weight: 400;
color: var(--white-50);
padding-bottom: 14px;
}

.list ul{
    list-style: none;
}

.list li{
    padding-block: 5px;
}

.list ul li a{
text-decoration: none;
font-size: 14px;
font-family: var(--inter);
font-weight: 400;
color: #767F8C;
}

.list ul li a:hover{
 color: var(--purple-50);
 cursor: pointer;
}
`

export const Down = styled.div`
padding-block: 20px;
border-top: 1px solid #2F3338;
display: flex;
justify-content: space-between;
align-items: center;

@media ${devices.mobile}{
    flex-direction: column;
    gap: 10px;
}

.H4{
font-size: 14px;
font-family: var(--inter);
font-weight: 400;
color: var(--white-50);

@media ${devices.mobile}{
    font-size: 12px;
}
}

.flex-icons{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
}

.Color{
    color: var(--purple-50);
}

`