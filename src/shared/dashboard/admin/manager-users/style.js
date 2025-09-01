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


//--------------- table head
.Tableheading{
    background-color: #F1F2F4;
    width: 100%;
    border-radius: 4px;
    padding-block: 10px;
    padding-inline: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${devices.mobile}{
        display: none;
    }
     @media ${devices.tablet}{
        display: none;
    }
}

.TableFlex{
    display: flex;
    justify-content: start;
    gap: 220px;
    align-items: center;
    padding-right: 20px;
}

.Tableheading span{
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    color: #474C54;
}

`