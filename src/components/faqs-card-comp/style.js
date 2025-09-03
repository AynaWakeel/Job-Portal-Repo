import styled from "styled-components";
import { devices } from "../breakpoints";


export const FaqSec = styled.div`
display: flex;
justify-content: start;
gap: 30px;
flex-direction: column;
/* margin-top: 20px; */

@media ${devices.tablet}{
    gap: 20px;
}

@media ${devices.mobile}{
    gap: 12px;
}
`

export const Faq = styled.div`
border-radius: 8px;
box-shadow: 0px 0px 15px var(--purple-50);

.H4{
font-size: 18px;
font-family: var(--inter);
font-weight: 400;
color: #18191C;
}
`

export const Title = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-block: 25px;
padding-inline: 25px;

@media ${devices.tablet}{
padding-block: 20px;
padding-inline: 25px;
}

@media ${devices.mobile}{
padding-block: 16px;
padding-inline: 15px;
}

.H4{
font-size: 18px;
font-family: var(--inter);
font-weight: 400;
color: #18191C;

@media ${devices.mobile}{
    font-size: 14px;
    width: 75%;
}
}

`

export const Answer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 25px;
padding-inline: 25px;

@media ${devices.tablet}{
padding-bottom: 20px;
padding-inline: 25px;
}

@media ${devices.mobile}{
padding-bottom: 16px;
padding-inline: 15px;
}

.para{
font-size: 18px;
border-top: 1px solid var(--purple-50);
font-family: var(--inter);
font-weight: 400;
color: #474C54;
padding-top: 20px;
text-align: justify;
}
`