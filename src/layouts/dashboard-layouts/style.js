import styled from "styled-components";
import { devices } from "../../components/breakpoints";

export const Dashboard = styled.div`
display: flex;
justify-content: end;
align-items: start;
gap: 10px;
position: relative;



.dashboard-size{
    width: 80%;
    position: relative;
    top: 80px;
    z-index: 10;

    @media ${devices.mobile}{
        width: 100%;
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
    width: 130px;
    background-color: var(--purple-50);
    }
}

.menudiv h3{
     font-size: 16px;
    font-family: var(--inter);
    font-weight: 400;
}
`

export const SidebarMenu = styled.div`
width: 20%;
box-shadow: 0px 0px 5px var(--purple-50);
display: flex;
justify-content: end;
height: 100vh;
padding-top: 40px;
/* position: relative; */
position: fixed;
left: 0px;
top: 90px;

    @media ${devices.mobile}{
        display: none;
    }

    @media ${devices.tablet}{
        width: 25%;
    }

.Sidebar{
    background-color: var(--white-50);
    width: 80%;

    @media ${devices.tablet}{
        width: 100%;
    }

   
}


.Navlinks{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
    list-style: none;
}

.tab{
    padding-block: 14px;
    padding-left: 10px;
    display: flex;
    justify-content: start;
    gap: 20px;
    align-items: center;
    width: 100%;

    @media ${devices.tablet}{
        gap: 15px;
    }
}

.tab.active{
    background-color: var(--purple-50);
    border-left: 3px solid var(--purple-600);
} 

.tab.active a{
    color: var(--purple-600);
}

.tab.active .IconColor{
    color: var(--purple-600);
}

.Navlinks li:hover{
    background-color: var(--purple-50);
    border-left: 3px solid var(--purple-600);
} 

.Navlinks li:hover a{
    color: var(--purple-600);
}

.Navlinks li:hover .IconColor{
    color: var(--purple-600);
}

.Navlinks a{
    text-decoration: none;
    color: #767F8C;
    font-size: 17px;
    font-weight: 400;
    font-family: var(--inter);
}

.IconColor{
    color: #767F8C;
}
`



// ---------- mobile sidebar

export const MobileSidebar = styled.div`
width: 60%;
box-shadow: 0px 0px 5px var(--purple-50);
display: flex;
justify-content: end;
height: 100%;
position: fixed;
padding-top: 35px;
top: 90px;
left: 0px;
z-index: 999;
display: none;
 background-color: var(--white-50); 

    @media ${devices.mobile}{
        display: block;
    }



.Navlinks{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
    list-style: none;
}

.Navlinks li{
    padding-block: 14px;
    padding-left: 10px;
    display: flex;
    justify-content: start;
    gap: 20px;
    align-items: center;
    width: 100%;

    @media ${devices.tablet}{
        gap: 15px;
    }
}

.Navlinks li:hover{
    background-color: var(--purple-50);
    border-left: 3px solid var(--purple-600);
} 

.Navlinks li:hover a{
    color: var(--purple-600);

}

.Navlinks li:hover .IconColor{
    color: var(--purple-600);

}

.Navlinks a{
    text-decoration: none;
    color: #767F8C;
    font-size: 17px;
    font-weight: 400;
    font-family: var(--inter);
}

.IconColor{
    color: #767F8C;
}
`