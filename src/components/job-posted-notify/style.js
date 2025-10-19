import styled from "styled-components";
import { devices } from "../breakpoints/index";

export const MainSec = styled.div`
padding-block: 20px;

.Flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 35px;


@media ${devices.mobile}{
    flex-direction: column;
    gap: 10px;
}
}

.TopHeading{
    color: #18191C;
    font-size: 40px;
    font-weight: 500;
    font-family: var(--inter);

    
@media ${devices.tablet}{
    font-size: 30px;

}

@media ${devices.mobile}{
    font-size: 26px;
}
}

.CardDiv{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
}

.Grid{
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;    
    flex-wrap: wrap;
    
@media ${devices.tablet}{
    justify-content: center;

}

@media ${devices.mobile}{
   justify-content: center;
}
}

.Card{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    border: 1px solid #EDEFF5;
    border-radius: 12px;
    padding-block: 16px;
    padding-inline: 24px;
    width: 100%;

@media ${devices.tablet}{
    width: 96%;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 15px;
}

@media ${devices.mobile}{
    width: 100%;
    flex-direction: column;
    justify-content: start;
    gap: 15px;
}
}

.Card.unRead{
 background-color: var(--purple-50);
}

.Card.readed{
 background-color: var(--white-50);
}

.Card:hover{
    box-shadow: 1px 5px 18px var(--purple-50);
    border: 1px solid var(--purple-600);
    cursor: pointer;
}

.Card:hover .Heading{
    color: var(--purple-600);
}

.Card:hover .IconBox{
    background-color: var(--purple-600);
}

.Card:hover .CardBtn{
    background-color: var(--purple-600);
    color: var(--white-50);
}

.Card:hover .Box{
    border-radius: 5px;
    padding-block: 12px;
    padding-inline: 10px;
    background-color: var(--purple-70);
    display: flex;
    justify-content: center;
    align-items: center;
}


.Card:hover .IconColor{
    color: var(--white-50);
}

.Inner-flex{
    display: flex;
    justify-content: start;
    gap: 8px;
    align-items: center;

    @media ${devices.mobile}{
        flex-wrap: wrap;
    }
}


.Right-side{
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    
    @media ${devices.mobile}{
        justify-content: space-between;
        width: 100%;
}
}

.Gap{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.IconBox{
    width: 68px;
    height: 68px;
    border-radius: 8px;
    background-color: var(--purple-70);
    display: flex;
    justify-content: center;
    align-items: center;
}

.Heading{
    color: #18191C;
    font-size: 18px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 2px;
    line-height: 28px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}

.SubHeading{
    color: #5E6670;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
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

.FlexIcon{
    display: flex;
    justify-content: start;
    gap: 6px;
    align-items: center;
}

.IconColor{
    color: var(--purple-600);
}

.Color{
    color: var(--purple-600);
}

.red{
    color: #E05151;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

`