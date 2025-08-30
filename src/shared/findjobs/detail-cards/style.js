import styled from "styled-components";
import { devices } from "../../../components/breakpoints";

// ------ cards
export const MainSec = styled.div`
background-color: var(--white-50);
padding-top: 50px;
padding-bottom: 50px;
padding-inline: 120px;

@media ${devices.tablet}{
    padding-block: 50px;
    padding-inline: 45px;
}

@media ${devices.mobile}{
    padding-block: 40px;
    padding-inline: 30px;
}

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
    font-size: 30px;
    font-weight: 500;
    font-family: var(--inter);

    
@media ${devices.tablet}{
    font-size: 30px;

}

@media ${devices.mobile}{
    font-size: 26px;
}
}

.IconColor{
    color: var(--purple-600);
}

`
