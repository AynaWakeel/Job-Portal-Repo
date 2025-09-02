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
    padding-bottom: 20px;

    
    
@media ${devices.tablet}{
   padding-bottom: 5px;
}

@media ${devices.mobile}{
    padding-bottom: 0px;
}
}


//------------- table
.Table{
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 5px;
    border-radius: 14px;
}

//--------------- table head
.Tableheading{
    background-color: #F1F2F4;
    width: 100%;
    padding-block: 10px;
    padding-inline: 40px;
}

.Tabletop th{
    /* border-radius: 4px; */
    padding-block: 10px;
    padding-inline: 10px;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    color: #474C54;
    text-align: start;
    /* width: 150px; */
}

.TableBody{
    padding-top: 30px;
}

.TableContent td{
    width: 300px;
    padding-block: 10px;
    padding-inline: 10px;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    color: #474C54;
    background-color: #F1F2F4;
    
}

.TableContent td:last-of-type{
    width: 20px;
    padding-block: 10px;
    padding-inline: 10px;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    color: #474C54;
    background-color: #F1F2F4;
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

.position{
     position: relative;
     display: flex;
     justify-content: end;
     gap: 20px;
}

.dropdown{
background-color: var(--purple-200);
width: 100px;
position: absolute;
top: 5px;
right: 120px;
z-index: 10;
}

.dropdown ul{
    list-style: none;
}

.dropdown li{
    padding-inline: 14px;
    padding-block: 8px;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    color: var(--white-50);
    /* padding-block: 5px; */
    text-align: center;
    border-top: 1px solid #e0e0e0ff;
}

.dropdown li:hover{
    background-color: var(--purple-50);
    color: var(--purple-600);
}

`