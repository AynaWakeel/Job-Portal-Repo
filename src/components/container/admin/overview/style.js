import styled from "styled-components";
import { devices } from "../../../breakpoints";


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

.divide{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 35px;
    align-items: center;
    margin-top: 30px;

    @media ${devices.mobile}{
        flex-direction: column;
    }
     @media ${devices.tablet}{
        flex-direction: column;
    }
}

`

export const ChartBox = styled.div`
width: 46%;
padding: 15px;
background-color: var(--white-50);
box-shadow: 0px 0px 12px var(--purple-50);
border-radius: 12px;

@media ${devices.mobile}{
    width: 100%;
}

@media ${devices.tablet}{
    width: 100%;
}

`