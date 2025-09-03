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
/* position: relative; */
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

.Navlinks{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;
    list-style: none;

    
@media ${devices.tablet}{
    display: none;
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

.Navright{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
    
    @media ${devices.mobile}{
        display: none;
    }
     @media ${devices.tablet}{
        display: none;
    }
}

.NavBtn{
    padding-block: 12px;
    padding-inline: 24px;
    border-radius: 3px;
    border: 1px solid var(--purple-50);
    box-shadow: 0px 0px 3px var(--purple-50);
    color: var(--purple-600);
    background-color: var(--white-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;

    @media ${devices.mobile}{
    display: none;
    }
      @media ${devices.tablet}{
        display: none;
    }
}

.Display{
    display: none;

    @media ${devices.mobile}{
    display: block;
    }
      @media ${devices.tablet}{
        display: block;
    }
}
`

export const NavbarNav = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 60px;

@media ${devices.tablet}{
    gap: 40px;
}

@media ${devices.mobile}{
    gap: 20px;;
}

.Logo{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
}

.IconColor{
    color: var(--purple-600);
}

.Logoname{
    font-size: 24px;
    font-weight: 600;
    font-family: var(--inter);
}

`

// ----- menu bar
export const Menu = styled.div`
padding-top: 18px;
padding-bottom: 28px;
padding-inline: 16px;
background-color: var(--white-50);
box-shadow: 0px 0px 5px var(--purple-200);
position: absolute;
top: 65px;
right: 10px;
z-index: 999;
display: none;

@media ${devices.mobile}{
    display: block;
}
 @media ${devices.tablet}{
        display: block;
}

.Navright{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;
}

.profile{
    width: 40px;
}

.Navlinks{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 26px;
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
