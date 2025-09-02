import styled from "styled-components";
import { devices } from "../../breakpoints";

export const Navbar = styled.div`
background-color: var(--white-50);
padding-block: 15px;
padding-inline: 120px;
height: 90px;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
box-shadow: 0px 0px 5px var(--purple-50);


@media ${devices.tablet}{
    padding-inline: 40px;
}

@media ${devices.mobile}{
    padding-inline: 30px;
}
`

export const NavbarNav = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap:80px;

@media ${devices.tablet}{
    gap: 40px;
}

@media ${devices.mobile}{
    gap: 20px;;
}

.menudiv{
    display: none;

    @media ${devices.mobile}{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    position: absolute;
    left: 15px;
    padding: 6px;
    width: 130px;
    }
}

.Logo{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;

    @media ${devices.mobile}{
        padding-left: 30px;
    }
}

.IconColor{
    color: var(--purple-600);
}

.Logoname{
    font-size: 24px;
    font-weight: 600;
    font-family: var(--inter);
}

.adminname{
    font-size: 18px;
    font-weight: 400;
    font-family: var(--inter);
}

.Navlinks{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;
    list-style: none;

    
@media ${devices.tablet}{
    gap: 20px;
}

@media ${devices.mobile}{
    display: none;
}

}

.Navlinks li{
    padding: 6px;
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

.Navlinks a:hover{
    color: var(--purple-600);
    border-bottom: 2px solid var(--purple-600);
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