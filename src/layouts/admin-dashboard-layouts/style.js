import styled from "styled-components";
import { devices } from "../../components/breakpoints";

//--- sidebar

export const Dashboard = styled.div`
display: flex;
justify-content: end;
align-items: start;
gap: 10px;
position: relative;

 @media ${devices.mobile}{
    justify-content: start;
}

.dashboard-size{
    flex:none;
    width: 80%;
    position: relative;
    top: 70px;
    z-index: 10;

    @media ${devices.mobile}{
        width: 100%;
        flex:1;
    }
     @media ${devices.tablet}{
        width: 75%;
    }
}
`

export const SidebarMenu = styled.div`
width: 20%;
position: fixed;
left: 0px;
top: 60px;
box-shadow: 0px 0px 5px var(--purple-50);
display: flex;
justify-content: end;
height: 100vh;
padding-top: 40px;
margin-top: 40px;
border-top-right-radius: 20px;
background-color: var(--purple-600);

    @media ${devices.mobile}{
        display: none;
    }

    @media ${devices.tablet}{
        width: 25%;
    }


.Sidebar{
    width: 80%;

    @media ${devices.tablet}{
        width: 100%;
    }
     @media ${devices.mobile}{
        display: none;
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
    color: var(--white-50);
    font-size: 17px;
    font-weight: 400;
    font-family: var(--inter);
}

.IconColor{
    color: var(--white-50);
}
`



// ---------- mobile sidebar

export const MobileSidebar = styled.div`
width: 60%;
box-shadow: 0px 0px 5px var(--purple-50);
display: flex;
justify-content: end;
height: 90vh;
padding-top: 20px;
position: absolute;
top: 60px;
left: 0px;
z-index: 999;
display: none;

    @media ${devices.mobile}{
        display: block;
    }


.Sidebar{
    background-color: var(--white-50);   
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