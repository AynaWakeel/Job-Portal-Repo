import styled from "styled-components";
import { devices } from "../../../../breakpoints";


export const Main = styled.div`
padding-top: 50px;
padding-bottom: 0px;
padding-inline: 20px;
min-height: 80vh;

.TopHeading{
    color: #18191C;
    font-size: 20px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 20px;

    
    
@media ${devices.tablet}{
   padding-bottom: 5px;
}

@media ${devices.mobile}{
    padding-bottom: 0px;
}
}

.flex-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex{
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
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

.CardBtn.active{
     background-color: var(--purple-600);
   color: var(--white-50);
}

.CardBtn:hover{
   background-color: var(--purple-600);
   color: var(--white-50);
}


`
