import styled from "styled-components";
import { devices } from "../../../breakpoints";


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
    padding-block: 10px;
    padding-inline: 10px;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    color: #474C54;
    text-align: start;
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
    width: 70px;
    padding-block: 10px;
    padding-inline: 10px;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    color: #474C54;
    background-color: #F1F2F4;
}

.Activediv{
    display: flex;
    justify-content: start;
    gap: 6px;
    align-items: center;
}

.Active{
    color: #0BA02C;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}


.red{
    color: #E05151;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

`


export const Pagination = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-block: 20px;
padding-inline: 20px;

.Num{
    padding: 10px 17px;
    border: 1px solid var(--white-250);
    border-radius: 50%;
    background-color: var(--white-200);
    color: var(--test);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    display: flex;
    justify-content: center;
    align-items: center;
}

.Btn{
    padding-block: 8px;
    padding-inline: 20px;
    border: 1px solid var(--white-250);
    border-radius: 3px;
    color: var(--white-250);
    background-color: var(--test);
    font-size: 13px;
    font-weight: 400;
    font-family: var(--inter);
    cursor: pointer;
}

.Btn:hover{
    color: var(--white-200);
    background-color: var(--purple-600);
}
.BtnOff{
    background-color: var(--white-200);
    color: var(--purple-600);
     padding-block: 8px;
    padding-inline: 20px;
    border: 1px solid var(--white-250);
    border-radius: 3px;
    
    font-size: 13px;
    font-weight: 400;
    font-family: var(--inter);
    cursor: pointer;
}
`