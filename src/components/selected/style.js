import styled from "styled-components";
import { devices } from "../breakpoints/index";

export const CompanyCards = styled.div`

.CardDiv{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
     min-height: 50vh;
}

.Grid{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;    
    flex-wrap: wrap;
    

@media ${devices.mobile}{
   justify-content: center;
}
}

.Card{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 24px;
    background-color: var(--white-50);
    border-radius: 12px;
    padding: 22px;
    width: 100%;
    box-shadow: 0px 0px 5px var(--purple-200);

}

.Card:hover{
    box-shadow: 1px 5px 18px var(--purple-200);
    cursor: pointer;
}

.Card:hover .CardBtn{
    background-color: var(--purple-600);
    color: var(--white-50);
}

.CardFlex{
     display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
}

.IconBox{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: var(--purple-200);
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo{
border-radius: 50%;
background-color: var(--purple-200);
width: 50px;
height: 50px;
}

.photo img{
width: 50px;
height: 50px;
border-radius: 50%;
}

.Heading{
    color: #18191C;
    font-size: 18px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 5px;
    line-height: 28px;
     max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}

.FlexIcon{
    display: flex;
    justify-content: start;
    gap: 6px;
    align-items: center;
}

.flex-col{
    display: flex;
    justify-content: start;
    gap: 8px;
    flex-direction: column;
    align-items: start;

    @media ${devices.mobile}{
        gap: 8px;
        flex-wrap: wrap;
    }
}

.FlexIcon{
    display: flex;
    justify-content: start;
    gap: 6px;
    align-items: center;
}

.SubHeading{
    color: #5E6670;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.gap{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
}

.small{
    color: #5E6670;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.flex{
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.CardBtn{
     padding-block: 14px;
     text-align: center;
     width: 100% ;
    border: none;
    border-radius: 3px;
    color: var(--purple-600);
    background-color: var(--purple-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
}

.tab{
    color: var(--purple-600);
}

.tab.active{
    fill: var(--test2);
    color: var(--purple-600);
}

.tab:hover{
    fill: var(--test2);
    color: var(--purple-600);
}
`


export const Pagination = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 25px;
padding-inline: 20px;

/* .Num{

    padding: 10px 15px;
    border: 1px solid var(--white-250);
    border-radius: 50%;
    background-color: var(--white-200);
    color: var(--test);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
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
} */

 .Num{
    color: var(--test);
}

.Btn{
    color: var(--white-250);
}

`