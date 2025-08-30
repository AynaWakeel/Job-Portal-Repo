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
export const FaqSec = styled.div`
display: flex;
justify-content: start;
gap: 30px;
flex-direction: column;

@media ${devices.tablet}{
    gap: 20px;
}

@media ${devices.mobile}{
    gap: 12px;
}


.H2{
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