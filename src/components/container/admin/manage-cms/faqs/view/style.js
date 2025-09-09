import styled from "styled-components";


export const Main = styled.div`
padding-inline: 20px;

.flex-box{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-block: 20px;
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