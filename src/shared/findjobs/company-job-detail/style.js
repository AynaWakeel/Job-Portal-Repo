import styled from "styled-components";
import { devices } from "../../../components/breakpoints";

export const Main = styled.div`
padding-bottom: 50px;
padding-top: 150px;
padding-inline: 120px;
border-radius: 12px;
box-shadow: 0px 0px 5px var(--purple-50);
background-color: #FFFF;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 40px;
margin: auto;


    @media ${devices.tablet} {
        padding-bottom: 50px;
        padding-inline: 40px;
    }

     @media ${devices.mobile} {
        padding-bottom: 40px;
        padding-inline: 20px;
    }


.Right-side{
    display: flex;
    justify-content: start;
    gap: 15px;
    align-items: center;
}

.status-side{
    display: flex;
    justify-content: start;
    gap: 5px;
    align-items: center;
}

.profile-flex-col{
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: start;
 gap: 10px;
}

.status{
    color: #E05151;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.Box{
    width: 48px;
    height: 48px;
    border-radius: 5px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--purple-50);
    cursor: pointer;
}

.profile{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${devices.tablet}{
        flex-direction: column;
        gap: 20px;
        align-items: start;
    }

      @media ${devices.mobile}{
        flex-direction: column;
        gap: 20px;
        align-items: start;
    }
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
    color: var(--purple-600);
    background-color: var(--purple-50);
    font-size: 16px;
    font-weight: 600;
    font-family: var(--inter);
    cursor: pointer;
}

.IconColor{
    color: var(--purple-600);
}

.Color{
    color: var(--purple-600);
}

.profile-intro{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;

    @media ${devices.tablet}{
        flex-direction: row;
        align-items: start;
        gap: 12px;
    }

     @media ${devices.mobile}{
        flex-direction: column;
        align-items: start;
        gap: 12px;
    }
}


.profile-pic img{
    background-size: contain;
    border-radius: 50%;
    width: 70px;
    height: 70px;
}


.Name{
    color: #18191C;
    font-size: 24px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 2px;
    line-height: 28px;
     max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 

    @media ${devices.tablet}{
        font-size: 20px;
    }
      @media ${devices.mobile}{
        font-size: 18px;
    }
}

.detail-flex{
    display: flex;
    justify-content: start;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;

   
     @media ${devices.mobile}{
        gap: 5px;
    }
}

.Badge{
    color: var(--purple-600);
    background-color: var(--purple-50);
    padding-block: 3px;
    padding-inline: 12px;
    border-radius: 52px;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.match{
    color: var(--purple-600);
    border-radius: 50%;
    border: 3px solid var(--purple-600);
    width: 35px;
    height: 35px;
    border-radius: 52px;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
    display: flex;
    justify-content: center;
    align-items: center;
}

.sub-flex{
    display: flex;
    justify-content: start;
    gap: 6px;
    align-items: center;
}

.Title{
    color: #767F8C;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.Heading{
    color: #18191C;
    font-size: 18px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 28px;
    padding-bottom: 20px;
     max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}

.profile-content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 30px;

    @media ${devices.tablet}{
        flex-direction: column;
    }

    @media ${devices.mobile}{
        flex-direction: column;
    }
}

.Sub{
    color: #767F8C;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
    text-align: justify;
    padding-bottom: 15px;
}

.List{
    padding-left: 16px;
}

.content-left{
    width: 55%;

    @media ${devices.tablet} {
        width: 100%;
    }

     @media ${devices.mobile} {
        width: 100%;
    }
}

.Profile-box{
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 50%;

    @media ${devices.tablet} {
        width: 100%;
    }

     @media ${devices.mobile} {
        width: 100%;
    }
}
`

export const Box = styled.div`
border: 1px solid #E7F0FA;
width: 100%;
border-radius: 8px;
padding: 24px;


.boxHeading{
    color: #18191C;
    font-size: 15px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 28px;
    padding-bottom: 20px;
}

.flex-col{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
    align-items: start;

    @media ${devices.mobile}{
        gap: 15px;
    }
}


.flex{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 12px;
    flex-wrap: wrap;
}


.flex-div{
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 8px;
    align-items: start;
}

.content{
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 8px;
    align-items: start;

    @media ${devices.mobile}{
        flex-direction: row;
    }
}

.content-row{
     display: flex;
    justify-content: start;
    flex-direction: row;
    gap: 8px;
    align-items: center;
}

.Title{
    color: #767F8C;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
    text-transform: capitalize;
    padding-bottom: 5px;
}

.SubHeading{
    color: #18191C;
    font-size: 14px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
    text-align: justify;
}

.IconColor{
    color: var(--purple-600);
}
`


//------- company box

export const CompanyBox = styled.div`
border: 1px solid #E7F0FA;
width: 100%;
border-radius: 8px;
padding: 24px;

.profile-intro{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;

     @media ${devices.tablet}{
        flex-direction: row;
        align-items: start;
        gap: 12px;
    }

     @media ${devices.mobile}{
        flex-direction: row;
        align-items: start;
        gap: 12px;
    }
}

.profile-logo{
    border-radius: 8px;
    width: 60px;
    height: 60px;
    background-color: #767F8C;
}

.profile-logo img{
    background-size: contain;

}


.Name{
    color: #18191C;
    font-size: 24px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 2px;
    line-height: 28px;
}

.detail-flex{
    display: flex;
    justify-content: start;
    gap: 12px;
    align-items: center;
    padding-top: 5px;
}

.Title{
    color: #767F8C;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
    text-transform: capitalize;
    padding-bottom: 5px;
}

.SubHeading{
    color: #18191C;
    font-size: 14px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
    text-align: justify;
}

.flex{
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.content{
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.flex-icons{
    display: flex;
    justify-content: start;
    gap: 6px;
    align-items: start;
    padding-top: 30px;
}

.photo{
border-radius: 50%;
background-color: var(--purple-200);
width: 60px;
height: 60px;
}

.photo img{
width: 60px;
height: 60px;
border-radius: 50%;
}

.Box-icons{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--purple-50);
    cursor: pointer;
}

.Box-icon2{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--purple-600);
    cursor: pointer;
}
`