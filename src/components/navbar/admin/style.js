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
position: fixed;
top: 0px;
width: 100%;
z-index: 1000;
box-shadow: 0px 0px 5px var(--purple-50);


@media ${devices.tablet}{
    padding-inline: 40px;
}

@media ${devices.mobile}{
    padding-inline: 30px;
}

.Navright{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
    
    @media ${devices.mobile}{
        display: none;
    }
}

.profile{
    position: relative;
}

.Display{
    display: none;

    @media ${devices.mobile}{
    display: block;
    }
}

.adminname{
    font-size: 18px;
    font-weight: 400;
    font-family: var(--inter);
}

`

export const NavbarNav = styled.div`
position: relative;
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
    left: 0px;
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
width: 50%;
box-shadow: 0px 0px 5px var(--purple-50);
display: flex;
justify-content: start;
align-items:center;
height: 100vh;
padding-top: 20px;
position: fixed;
top: 90px;
left: 0px;
z-index: 999;
display: none;
background-color: var(--white-50);   

    @media ${devices.mobile}{
        display: block;
    }

.Navright{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding-inline: 10px;
}

.Navright img{
    width: 40px;
}

.adminname{
    font-size: 18px;
    font-weight: 400;
    font-family: var(--inter);
}


.Navlinks{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
    list-style: none;
    padding-top:10px;
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

.logout{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    padding-inline: 15px;
    padding-top: 20px;
}

.NavBtn{
    padding-block: 12px;
    padding-inline: 24px;
    border-radius: 3px;
    border: 1px solid var(--purple-50);
    box-shadow: 0px 0px 3px var(--purple-50);
    color: var(--purple-600);
    background-color: var(--white-50);
    font-size: 14px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
}
`


// ----- menu bar
export const Menu = styled.div`
padding-block: 18px;
padding-inline: 26px;
background-color: var(--white-50);
box-shadow: 0px 0px 5px var(--purple-200);
position: absolute;
top: 65px;
right: 100px;
z-index: 999;

@media ${devices.mobile}{
    display: none;
}

.Navlinks{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
    list-style: none;
}

.Navlinks a{
    text-decoration: none;
    color: var(--purple-200);
    font-size: 15px;
    font-weight: 400;
    font-family: var(--inter);
}

.Navlinks a:hover{
    color: var(--purple-600);
    border-bottom: 2px solid var(--purple-600);
}
`