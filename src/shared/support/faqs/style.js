import styled from "styled-components";
import { devices } from "../../../components/breakpoints";

export const Overlay = styled.div`
padding-block: 100px;
padding-inline: 120px;
display: flex;
flex-direction: column;
justify-content: start;
gap: 80px;

@media ${devices.tablet}{
    gap: 50px;
    padding-block: 50px;
    padding-inline: 40px;
}

@media ${devices.mobile}{
    gap: 40px;
    padding-block: 30px;
    padding-inline: 20px;
}
`
export const Main = styled.div`

.H2{
    margin-bottom: 20px;
font-size: 28px;
font-family: var(--inter);
font-weight: 500;
color: #18191C;
padding-bottom: 10px;

@media ${devices.tablet}{
    font-size: 24px;
}

@media ${devices.mobile}{
    font-size: 20px;
}
}
`