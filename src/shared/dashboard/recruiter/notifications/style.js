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
    padding-bottom: 20px;

    
@media ${devices.tablet}{
    font-size: 30px;

}

@media ${devices.mobile}{
    font-size: 26px;
}
}
`