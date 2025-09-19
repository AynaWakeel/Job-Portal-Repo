import styled from "styled-components";
import { devices } from "../breakpoints";

export const Form = styled.div`


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

.FormInput::placeholder{
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
}

.SelectFlex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.Input{
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
    color: #9199A3;
    width: 100%;
}

.Input:active{
    color: var(--purple-600);
}

.Input::placeholder{
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
}

.simple-dropdown{
    position: relative;
}
`

//--------------
export const Dropdown = styled.div`
width: 100%;
background-color: #c3b9d1ff;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
position: absolute;
top: 52px;
left: 0px;
z-index: 999;

.options{
    list-style: none;
}

.options li{
    padding-block: 12px;
    padding-inline: 15px;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--poppin);
    color: #464D61;
}

.options li:hover{
    width: 100%;
    background-color: var(--purple-70);

}

`