import styled from "styled-components";
import { devices } from "../breakpoints";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000045; 
  backdrop-filter: blur(1px);     
  z-index: 999; 
`

export const Main = styled.div`
width: 65%;
padding-block: 40px;
padding-inline: 40px;
border-radius: 12px;
box-shadow: 0px 0px 5px var(--purple-50);
background-color: #FFFF;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 40px;
margin: auto;
position: relative;
overflow-y: auto;
max-height: 80vh;

@media ${devices.tablet}{
width: 80%;
}

@media ${devices.mobile}{
padding-block: 25px;
padding-inline: 20px;
gap: 25px;
width: 95%;
}


.Circle{
    width: 30px;
    height: 30px;
    background-color: var(--purple-50);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 20px;
}

.profile{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 440px;
}


.profile-intro{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;


@media ${devices.mobile}{
    gap: 10px;
}
}

.profile-pic{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #767F8C;
}


.Name{
    color: #18191C;
    font-size: 24px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 2px;
    line-height: 28px;

    @media ${devices.mobile}{
    font-size: 20px;
    }
}


.Title{
    color: #767F8C;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.Heading{
    color: #18191C;
    font-size: 18px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 28px;
    padding-bottom: 20px;
}

.profile-content{
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 40px;

@media ${devices.tablet}{
    flex-direction: column;
}

@media ${devices.mobile}{
    flex-direction: column;
}
}

.Sub{
    color: #767F8C;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
    text-align: justify;
    padding-bottom: 15px;
}

.Profile-box{
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    gap: 20px;

@media ${devices.tablet}{
    flex-direction: row;
    justify-content: start;
    align-items: start;
}

@media ${devices.mobile}{
    flex-direction: column;
}
}
`

export const Box = styled.div`
border: 1px solid #E7F0FA;
width: 310px;
border-radius: 8px;
padding: 24px;

@media ${devices.tablet}{
    width: 100%;
}

@media ${devices.mobile}{
    width: 100%;
}


.boxHeading{
    color: #18191C;
    font-size: 15px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 28px;
    padding-bottom: 20px;

     @media ${devices.mobile}{
        padding-bottom: 14px;
     }
}

.flex{
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 25px;
    align-items: start;

     @media ${devices.mobile}{
        gap: 14px;
     }
}


.content{
    display: flex;
    justify-content: start;
    gap: 14px;
    align-items: start;
}


.Title{
    color: #767F8C;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
    text-transform: capitalize;
    padding-bottom: 5px;

     @media ${devices.mobile}{
        padding-bottom: 0px;
     }
}

.SubHeading{
    color: #18191C;
    font-size: 14px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
    text-align: justify;
}

.IconColor{
    color: var(--purple-600);
}
`