import styled from "styled-components";
import { devices } from "../../../components/breakpoints";


// ------ hero
export const HeroSec = styled.div`
background-color: var(--purple-50);
padding-block: 120px;
padding-inline: 120px;

@media ${devices.laptop}{
    padding-inline: 50px;
}

@media ${devices.tablet}{
    padding-top: 100px;
    padding-bottom: 30px;
    padding-inline: 40px;
}

@media ${devices.mobile}{
    padding-top: 80px;
    padding-bottom: 20px;
    padding-inline: 25px;
}

.IconColor{
    color: var(--purple-600);
}

.ColorImg{
    color: var(--purple-600);
}
`

export const HeroDiv = styled.div`
display: flex;
justify-content: space-between;
gap: 50px;
align-items: center;
padding-block: 50px;
position: relative;

@media ${devices.tablet}{
    flex-direction: column;
    gap: 80px;
}

@media ${devices.mobile}{
    flex-direction: column;
    gap: 40px;
}

.FlexCol{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
}

.TxtDiv{
    width: 98%;

    @media ${devices.tablet}{
        width: 80%;
    }

     @media ${devices.mobile}{
        width: 100%;
    }
}

.Suggest{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
    padding-top: 20px;
    flex-wrap: wrap;
}

.Suggest p{
    font-size: 15px;
    font-weight: 400;
    font-family: var(--inter);
    color: #9199A3;
}

.Suggest a{
    font-size: 15px;
    font-weight: 400;
    font-family: var(--inter);
    color: var(--purple-200);
    text-decoration: none;
}


.SearchDiv{
    width: 100%;

     @media ${devices.tablet}{
        width: 80%;
    }

      @media ${devices.mobile}{
        width: 100%;
    }
}

.HeroHeading{
    font-size: 56px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 64px;
    padding-bottom: 20px;

     @media ${devices.tablet}{
        font-size: 45px;
        line-height: 54px;
    }

    @media ${devices.mobile}{
        font-size: 30px;
        line-height: 44px;
        padding-bottom: 12px;
    }
}

.HeroPara{
    font-size: 18px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 28px;
    text-align: justify;

    @media ${devices.tablet}{
        width: 75%;
    }

    @media ${devices.mobile}{
        font-size: 16px;
    }
}

.ImgSec{
    width: 100%;
    text-align: end;

    @media ${devices.tablet}{
        text-align: center;
        padding-top: 90px;
    }
      @media ${devices.mobile}{
        text-align: center;
        padding-top: 240px;
    }
}

.ImgSec img{
    @media ${devices.mobile}{
        width: 90%;
    }
}
`

//--------------- desktop searchbar
export const Searchbar = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
gap: 12px;
padding-block: 15px;
padding-inline: 30px;
background-color: var(--white-50);
border-radius: 8px;
width: 50%;
height: 80px;
position: absolute;
margin-top: 20px;

@media ${devices.mobile}{
    width: 100%;
}

@media ${devices.tablet} {
    width: 100%;
}

.InputFlex{
    display: flex;
    justify-content: start;
    align-items: end;
    gap: 10px;
}

.Input{
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
    color: #9199A3;
    width: 200px;

    @media ${devices.mobile}{
        width: 130px;
    }
}

.Input:active{
    color: var(--purple-600);
}

.Input::placeholder{
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
}

.SearchBtn{
    width: 126px;
    padding-block: 16px;
    padding-inline: 21px;
    border-radius: 4px;
    background-color: var(--purple-600);
    border: none;
    color: var(--white-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
}

`

//------------- industry dropdown
export const Dropdown = styled.div`
width: 250px;
background-color: #c3b9d1ff;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
position: absolute;
top: 52px;

@media ${devices.tablet} {
    width: 220px;
}

@media ${devices.mobile} {
    width: 300px;
    z-index: 999;
}

.options{
    list-style: none;
}

.options li{
    padding-block: 12px;
    padding-inline: 15px;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--poppin);
    color: #464D61;
}

.options li:hover{
    width: 100%;
    background-color: var(--purple-70);

}
`


//---------------------- desktop search popup
export const SearchModal = styled.form`
display: flex;
flex-direction: column;
align-items: center;
z-index: 999;
    background-color: var(--white-50);
    border-radius: 8px;
    position: absolute;
    top:426px;
    margin-top: 20px;

@media ${devices.mobile}{
    display: none;
}

@media ${devices.tablet}{
    display: none;
}

.SearchOptions{
  width: 1184px;
  padding-inline: 30px;
  padding-block: 15px;
  background-color: #c3b9d1ff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
}

.OptionTitle{
    font-size: 18px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 10px;
}
.Radiodiv{
    padding-top: 10px;
    display: flex;
    justify-content: start;
    gap: 8px;
    align-items: center;
}

.RadioLabel{
    font-size: 14px;
    font-weight: 400;
    font-family: var(--poppin);
    color: #464D61;
}

.InputFlex{
    display: flex;
    justify-content: start;
    align-items: end;
    gap: 10px;
}

.SelectFlex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}


.SelectColor{
    color: #9199A3;
}

.SelectColor:checked{
    color: var(--purple-600);
}

`

export const Radio = styled.input.attrs({ type: 'radio' })`
width: 20px;
height: 20px;
color: var(--gray-250);
cursor: pointer;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
width: 20px;
height: 20px;
color: var(--gray-250);
cursor: pointer;
`

//--------------- tablet searchbar
export const TabletSearchbar = styled.form`
display: flex;
justify-content: start;
align-items: start;
flex-direction: column;
padding-block: 15px;
padding-inline: 30px;
background-color: var(--white-50);
border-radius: 8px;
width: 500px;
position: absolute;
margin-top: 0px;
display: none;


@media ${devices.tablet} {
    display: flex;
}

@media ${devices.mobile} {
    width: 340px;
    padding-block: 15px;
padding-inline: 20px;
}

.InputFlex{
    display: flex;
    justify-content: start;
    align-items: end;
    gap: 10px;
    padding-block: 10px;
}

.SelectFlex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 0px;

    @media ${devices.mobile} {
        justify-content: start;
        gap: 0px;
    }
}


.Flexrow{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 10px;
    
    @media ${devices.mobile} {
        flex-wrap: wrap;
        gap: 0px;
    }
}


.Input{
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
    color: #9199A3;
    width: 180px;

    @media ${devices.mobile} {
        width: 260px;
    }
   
}

.Input:active{
    color: var(--purple-600);
}

.Input::placeholder{
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
}


.Select{
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
    color: #9199A3;
    width: 158px;

    @media ${devices.mobile} {
        width: 240px;
    }
   
}

.SearchBtn{
    margin-top: 10px;
    width: 100%;
    padding-block: 16px;
    padding-inline: 21px;
    border-radius: 4px;
    background-color: var(--purple-600);
    border: none;
    color: var(--white-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
}

.simple-dropdown{
    position: relative;
}

.advance-dropdown{
    position: relative;
}

.SelectColor{
    color: #9199A3;
}

.SelectColor:active{
    color: var(--purple-600);
}
`

//-------------------------- tablet search modal
export const TabletSearchModal = styled.div`
    background-color: var(--white-50);
    border-radius: 8px;
    position: absolute;
    top:480px;
    left: 260px;
    display: none;
    width: 240px;

@media ${devices.tablet}{
    display: block;
}

@media ${devices.mobile} {
    left: 0;              
    right: 0;             
    margin: auto;        
    width:240px;          
    max-width: 340px;     
    top: 545px;            
    position: absolute;  
}

.SearchOptions{
  background-color: #c3b9d1ff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
}

.InputFlex{
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.SelectFlex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}


.Input{
    padding-block: 12px;
    padding-inline: 15px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--poppin);
    color: #464D61;
    width: 216px;
}

.Select{
    padding-block: 12px;
    padding-inline: 15px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--poppin);
    color: #464D61;
    width: 216px;

    @media ${devices.mobile} {
        /* width: 276px; */
    }
   
}

.SelectFlex:hover{
     width: 100%;
    background-color: var(--purple-70);
}


.simple-dropdown{
    position: relative;
}

.advance-dropdown{
    position: relative;
}

`

//-------------------------- tablet sub-dropdowns 
export const SubDropdown = styled.div`
width: 250px;
background-color: #000;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
position: absolute;
z-index: 999;
top: 42px;

@media ${devices.tablet} {
    width: 240px;
}

@media ${devices.mobile} {
    width: 100%;
    left: 0px;
    margin: auto;
}

.options{
    list-style: none;
}

.options li{
    padding-block: 12px;
    padding-inline: 15px;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--poppin);
    color: #fff;
}

.options li:hover{
    width: 100%;
    background-color: var(--purple-200);
}
`


// ------ cards
export const MainSec = styled.div`
background-color: var(--white-50);
padding-top: 100px;
padding-bottom: 50px;
padding-inline: 120px;

@media ${devices.laptop}{
    padding-inline: 50px;
}

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
    font-size: 40px;
    font-weight: 500;
    font-family: var(--inter);

    
@media ${devices.tablet}{
    font-size: 30px;

}

@media ${devices.mobile}{
    font-size: 26px;
}
}

.BtnFlex{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.TopArrowBtn{
    padding-block: 10px;
    padding-inline: 14px;
    border: none;
    border-radius: 3px;
    background-color: var(--purple-70);
    cursor: pointer;
}

.TopBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding-block: 12px;
    padding-inline: 24px;
    border: 1px solid var(--white-250);
    border-radius: 3px;
    color: var(--purple-600);
    background-color: var(--white-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;

@media ${devices.tablet}{
    font-size: 16px;

}

@media ${devices.mobile}{
    font-size: 14px;
}
}

.IconColor{
    color: var(--purple-600);
}

`
