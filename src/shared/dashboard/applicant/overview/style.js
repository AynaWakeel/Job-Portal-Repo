import styled from "styled-components";
import { devices } from "../../../../components/breakpoints";

export const Overview = styled.div`
padding-inline: 20px;
padding-block: 20px;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;

.Txtdiv{
    padding-block: 30px;
}

.Txtdiv h5{
font-size: 18px;
font-weight: 500;
font-family: var(--inter);
color: #18191C;
}

.Txtdiv p{
font-size: 14px;
font-weight: 400;
font-family: var(--inter);
color: #767F8C;
padding-block: 10px;
}
`
export const Verification = styled.div`
padding-top: 20px;
width: 100%;
display: flex;
justify-content: center;

.Card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    background-color: #E05151;
    border-radius: 12px;
    padding-inline: 24px;
    padding-block: 40px;
    width: 100%;

@media ${devices.tablet}{
    width: 96%;
}

@media ${devices.mobile}{
    width: 100%;
    flex-direction: column;
    gap: 25px;
}

}

.Card:hover{
    box-shadow: 0px 0px 10px #E05151;
    cursor: pointer;
}


.Inner-flex{
    display: flex;
    justify-content: start;
    gap: 25px;
    align-items: center;

    @media ${devices.mobile}{
        gap: 8px;
        flex-wrap: wrap;
    }
}

.profile img{
    width: 120%;
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

.Heading{
    color: var(--white-50);
    font-size: 18px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 2px;
    line-height: 28px;
}


.SubHeading{
    color: var(--white-50);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.CardBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding-block: 12px;
    padding-inline: 24px;
    border: 1px solid var(--white-250);
    border-radius: 3px;
    color: #E05151;
    background-color: var(--purple-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
}

.IconColor{
    color: #E05151;
}
`

export const Jobdiv = styled.div`
padding-block: 10px;
width: 100%;

.Flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 15px;
    padding-bottom: 10px;
    padding-top: 20px;


@media ${devices.mobile}{
    flex-direction: column;
    gap: 10px;
}
}

.TopHeading{
    color: #18191C;
    font-size: 20px;
    font-weight: 500;
    font-family: var(--inter);

    
@media ${devices.tablet}{
    font-size: 30px;

}

@media ${devices.mobile}{
    font-size: 26px;
}
}

.TopBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding-block: 12px;
    padding-inline: 24px;
    border: none;
    border-radius: 3px;
    color: #767F8C;
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
    color: #767F8C;
}

//--------------- table head
.Tableheading{
    background-color: #F1F2F4;
    width: 100%;
    border-radius: 4px;
    padding-block: 10px;
    padding-inline: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${devices.mobile}{
        display: none;
    }
}

.TableFlex{
    display: flex;
    justify-content: start;
    gap: 220px;
    align-items: center;
    padding-right: 20px;

    @media ${devices.tablet}{
        gap: 20px;
        padding-right: 0px;
    }
}

.Tableheading span{
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    color: #474C54;
}

`