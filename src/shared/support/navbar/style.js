import styled from "styled-components";
import { devices } from "../../../components/breakpoints";

export const Main = styled.div`
padding-bottom: 20px;
padding-inline: 120px;
padding-top: 120px;
background-color: var(--purple-50);

@media ${devices.tablet}{
    padding-inline: 40px;
}

@media ${devices.mobile}{
    padding-inline: 20px;
}

.List{
    display: flex;
    justify-content: start;
    gap: 14px;
    align-items: center;
    list-style: none;
}

.List span{
    color: var(--purple-600);
}

.List li{
    padding-inline: 10px;
}

.tab{
    text-decoration: none;
    color: var(--purple-200);
    font-size: 17px;
    font-weight: 400;
    font-family: var(--inter);
}

.tab.active{
    color: var(--purple-600);
    border-bottom: 2px solid var(--purple-600);
}

.List li a:hover{
    color: var(--purple-600);
    border-bottom: 2px solid var(--purple-600);
}
`