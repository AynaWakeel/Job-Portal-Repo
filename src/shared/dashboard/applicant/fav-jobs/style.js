import styled from "styled-components";
import { devices } from "../../../../components/breakpoints";


export const Jobdiv = styled.div`
padding-block: 30px;
padding-inline: 20px;

.TopHeading{
    color: #18191C;
    font-size: 20px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 10px;

    
    
@media ${devices.tablet}{
   padding-bottom: 5px;
}

@media ${devices.mobile}{
    padding-bottom: 0px;
}
}

`