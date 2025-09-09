import styled from "styled-components"
import { devices } from "../../../../../breakpoints"


export const Main = styled.div`
width: 100%;


.FormBtn{
    background-color: var(--purple-600);
    color: var(--white-50);
    outline: none;
    border: none;
    padding-block: 15px;
    padding-inline: 20px;
    border-radius: 4px;
    margin-top: 8px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}

.Label{
    font-size: 14px;
    font-weight: 400;
    color: var(--dark-800);
    font-family: var(--inter);
}

.spacetop{
    padding-top: 15px;
}

//-------------- react quill

.Quillbar{
    margin-top: 10px;
    outline: none;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    width: 100%;
    caret-color: var(--purple-300);
}

.Quillbar .ql-editor{
    min-height: 300px;
    max-height: 400px;
    overflow-y: auto;
}

.flex-btn{
    display: flex;
    justify-content: start;
    gap: 15px;
    align-items: center;
}
`

export const Form = styled.div`
width: 100%;
margin-top: 10px;
margin-inline: auto;

    @media ${devices.tablet}{
    width: 100%;
    }

    @media ${devices.mobile}{
    width: 100%;
    }

.FormSpace{
   padding-block: 10px;
}

.FormInput{
    outline: none;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    padding-block: 16px;
    margin-top: 10px;
    padding-inline: 20px;
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);

}

.Label{
    font-size: 14px;
    font-weight: 400;
    color: var(--dark-800);
    font-family: var(--inter);
}

.FormInput::placeholder{
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
}

`