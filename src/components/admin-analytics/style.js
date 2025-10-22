import styled from "styled-components";
import { devices } from "../breakpoints/index";

export const MainSec = styled.div`

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

.Card {
  flex: 1 1 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--purple-50);
  border-radius: 12px;
  padding-inline: 24px;
  padding-block: 30px;
  min-width: 300px;
  box-sizing: border-box;
  
  @media ${devices.mobile} {
      .Card {
          flex: 1 1 100%; 
          max-width: 0px;
  }
}
}

.Card:hover{
    box-shadow: 1px 5px 18px var(--purple-50);
    cursor: pointer;
}

.Card:hover .IconBox{
    background-color: var(--purple-600);
}

.Card:hover .IconColor{
    color: var(--white-50);
}

.IconBox{
    width: 68px;
    height: 68px;
    border-radius: 8px;
    background-color: var(--white-50);
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
}

.SubHeading{
    color: #5E6670;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.IconColor{
    color: var(--purple-600);
}
`