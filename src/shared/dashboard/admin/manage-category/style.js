import styled from "styled-components";
import { devices } from "../../../../components/breakpoints";


export const Main = styled.div`
padding-block: 50px;
padding-inline: 20px;

.TopHeading{
    color: #18191C;
    font-size: 20px;
    font-weight: 500;
    font-family: var(--inter);
}

.flex-box{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 20px;
}

.Title{
    color: #18191C;
    font-size: 18px;
    font-weight: 400;
    font-family: var(--inter);
}

.CardBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding-block: 10px;
    padding-inline: 20px;
    border: 1px solid var(--white-250);
    border-radius: 3px;
    color: var(--purple-600);
    background-color: var(--purple-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
}

.CardBtn:hover{
   background-color: var(--purple-600);
   color: var(--white-50);
}

`

export const Box = styled.div`
margin-top: 20px;
 padding-block: 20px;
    padding-inline: 20px;
    border: 1px solid var(--white-250);
    border-radius: 8px;
    background-color: var(--purple-50);

.list{
    list-style: none;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.list li{
    padding-block: 8px;
    padding-inline: 15px;
    border: 1px solid var(--white-250);
    border-radius: 3px;
    background-color: var(--purple-200);
   color: var(--white-50);
    font-size: 15px;
    font-weight: 400;
    font-family: var(--inter);
}

`