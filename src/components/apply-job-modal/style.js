import styled from "styled-components";
import { devices } from "../breakpoints";

export const Overlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0px;
left: 0px;
right: 0px;
background-color: #00000040;
backdrop-filter: blur(1px);
width: 100vw;
height: 100vh;
z-index: 999;

`

export const Main = styled.div`
width: 36vw;
background-color: #fff;
box-shadow: 0px 0px 5px var(--purple-50);
border-radius: 8px;
padding-block: 24px;
padding-inline: 20px;
position: relative;

@media ${devices.tablet} {
    width: 90vw;
}

@media ${devices.mobile} {
    width: 96vw;
}


.TopHeading{
    color: var(--dark-800);
    font-size: 24px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 5px;
    word-wrap: break-word;

    @media ${devices.tablet}{
        font-size: 18px;
    }

    @media ${devices.mobile}{
        font-size: 16px;
    }
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


.spacetop{
    padding-top: 25px;

@media ${devices.tablet} {
    padding-top: 20px;
}

@media ${devices.mobile} {
   padding-top: 20px;
}

}

.SubHeading{
    color: var(--dark-800);
    font-size: 14px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 15px;
}

.flex{
    display: flex;
    justify-content: start;
    gap: 35px;
    align-items: center;

@media ${devices.mobile} {
    flex-direction: column;
    align-items: start;
    gap: 12px;
}

@media ${devices.tablet} {
   gap: 15px;
}
}

.flexBtn{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

//-------------- react quill

.Quillbar{
    outline: none;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    width: 100%;
    caret-color: var(--purple-300);
}

.Quillbar .ql-editor{
    height: 150px;
}


.FormBtn{
    background-color: var(--purple-600);
    color: var(--white-50);
    outline: none;
    border: none;
    padding-block: 10px;
    padding-inline: 15px;
    border-radius: 4px;
    margin-top: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
}
`
