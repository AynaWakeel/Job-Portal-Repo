import styled from "styled-components";
import { devices } from "../breakpoints/index";

export const MainSec = styled.div`
padding-block: 20px;
max-width: 1200px;
overflow-x: hidden;

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

.TopBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding-block: 12px;
    padding-inline: 24px;
    border: 1px solid var(--white-250);
    border-radius: 3px;
    color: var(--purple-600);
    background-color: var(--white-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;

@media ${devices.tablet}{
    font-size: 16px;

}

@media ${devices.mobile}{
    font-size: 14px;
}
}

.CardDiv{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
}

.Grid{
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    background-color: var(--white-50);
    border: 1px solid #EDEFF5;
    border-radius: 12px;
    padding: 24px;
    width: 100%;

@media ${devices.tablet}{
   width: 100%;
    flex-direction: column;
    align-items: start;
    gap: 25px;
}

@media ${devices.mobile}{
    width: 100%;
    flex-direction: column;
    gap: 25px;
}

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
    width: 48px;
    height: 48px;
    border-radius: 5px;
    padding: 12px;
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
    gap: 15px;
    align-items: center;

    @media ${devices.mobile}{
        gap: 8px;
        flex-wrap: wrap;
    }
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


.photo{
border-radius: 50%;
background-color: var(--purple-200);
width: 60px;
height: 60px;
}

.photo img{
width: 60px;
height: 60px;
border-radius: 50%;
}

.Right-side{
    display: flex;
    justify-content: start;
    gap: 15px;
    align-items: center;
    
    @media ${devices.mobile}{
        justify-content: space-between;
        width: 100%;
    }
     @media ${devices.tablet}{
        justify-content: space-between;
        width: 100%;
    }
}


.Box{

    @media ${devices.mobile}{
    width: 48px;
    height: 48px;
    border-radius: 5px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
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

.Badge{
    color: var(--purple-600);
    background-color: var(--purple-50);
    padding-block: 3px;
    padding-inline: 12px;
    border-radius: 52px;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.SubHeading{
    color: #5E6670;
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


.CardBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding-block: 12px;
    padding-inline: 24px;
    border: 1px solid var(--white-250);
    border-radius: 3px;
    color: var(--purple-600);
    background-color: var(--purple-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
}

.IconColor{
    color: var(--purple-600);
}

.Color{
    color: var(--purple-600);
}

.Color.active{
    fill: var(--purple-600);
}
`