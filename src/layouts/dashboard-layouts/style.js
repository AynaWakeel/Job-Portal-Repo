import styled from "styled-components";
import { devices } from "../../components/breakpoints";

export const Dashboard = styled.div`
display: flex;
justify-content: end;
align-items: start;
gap: 10px;
position: relative;



.dashboard-size{
    flex:none;
    width: 80%;
    position: relative;
    top: 70px;
    z-index: 10;

    @media ${devices.mobile}{
        width: 100%;
        flex:1;
        top: 90px;
    }
     @media ${devices.tablet}{
        width: 75%;
    }
}


.menudiv{
    display: none;

    @media ${devices.mobile}{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    position: fixed;
    top: 90px;
    left: 0px;
    z-index: 1000;
    padding: 6px;
    width: 40px;
    background-color: var(--purple-50);
    }
}

.menudiv h3{
     font-size: 16px;
    font-family: var(--inter);
    font-weight: 400;
}
`
