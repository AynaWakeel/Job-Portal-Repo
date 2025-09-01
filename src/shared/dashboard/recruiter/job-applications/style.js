import styled from "styled-components";
import { devices } from "../../../../components/breakpoints";


export const Jobdiv = styled.div`
padding-block: 30px;
padding-inline: 20px;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 20px;

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

.flex{
width: 100%;
display: flex;
justify-content: space-between;
align-items: start;
gap: 18px;

@media ${devices.tablet}{
    flex-direction: column;
}
@media ${devices.mobile}{
    flex-direction: column;
}
}

.Box{
    padding-block: 25px;
    padding-inline: 15px;
    background-color: #E4E5E8;
    border-radius: 8px;
    width: 100%;
}

.Title{
    color: #18191C;
    font-size: 15px;
    font-weight: 400;
    font-family: var(--inter);
    padding-bottom: 20px;

}
`