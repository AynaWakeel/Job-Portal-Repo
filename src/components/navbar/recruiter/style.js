import styled from "styled-components";
import { devices } from "../../breakpoints";

export const Navbar = styled.div`
background-color: var(--white-50);
padding-block: 15px;
padding-inline: 70px;
height: 90px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0px;
width: 100%;
z-index: 1000;
box-shadow: 0px 0px 5px var(--purple-50);

@media ${devices.laptop} {
padding-inline: 50px;
}

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

@media ${devices.laptop} {
 gap: 10px;
}
    
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
    cursor: pointer;
}

.Navright{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    
    @media ${devices.mobile}{
        display: none;
    }
     @media ${devices.tablet}{
        display: none;
    }
}

.Navright img{
    cursor: pointer;
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

.photo{
border-radius: 50%;
background-color: var(--purple-200);
width: 50px;
height: 50px;
}

.photo img{
width: 50px;
height: 50px;
border-radius: 50%;
}

.unreadNotify{
    position: relative;
}

.count{
    position: absolute;
    top: 2px;
    left: 20px;
    width: 15px;
    height: 15px;
    padding: 2px 6px;
    background-color: var(--purple-50);
    border-radius: 50%;
    color: var(--purple-600);
    font-size: 10px;
    font-weight: 600;
    font-family: var(--inter);
}

`

export const NavbarNav = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 60px;

@media ${devices.laptop} {
 gap: 30px;
}
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
    cursor: pointer;
}

.IconColor{
    color: var(--purple-600);
}

.Logoname{
    font-size: 24px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
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

.Navright img{
    cursor: pointer;
}

.profile{
    width: 40px;
    cursor: pointer;
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
    cursor: pointer;
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

.photo{
border-radius: 50%;
background-color: var(--purple-200);
width: 50px;
height: 50px;
}

.photo img{
width: 50px;
height: 50px;
border-radius: 50%;
}

.unreadNotify{
    position: relative;
}

.count{
    position: absolute;
    top: 2px;
    left: 20px;
    width: 15px;
    height: 15px;
    padding: 2px 6px;
    background-color: var(--purple-50);
    border-radius: 50%;
    color: var(--purple-600);
    font-size: 10px;
    font-weight: 600;
    font-family: var(--inter);
    display: flex;
    justify-content: center;
    align-items: center;
}
`

//----------- desktop dropdown

export const DropdownMenu = styled.div`
padding-top: 14px;
padding-bottom: 14px;
padding-inline: 18px;
background-color: var(--white-50);
box-shadow: 0px 0px 5px var(--purple-200);
position: absolute;
top: 65px;
right: 80px;
z-index: 999;

@media ${devices.mobile}{
    display: none;
}

@media ${devices.tablet}{
    top: 65px;
   right: 45px;
}

@media ${devices.laptop}{
    top: 65px;
   right: 65px;
}


.Navright{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0px;
}

.Navright img{
    cursor: pointer;
}

.Navlinks{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 5px;
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
    cursor: pointer;
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
`
