import styled from "styled-components";
import { devices } from "../../../../components/breakpoints";

export const Main = styled.div`
padding-inline: 120px;
border-radius: 12px;
box-shadow: 0px 0px 5px var(--purple-50);
background-color: #FFFF;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
/* gap: 40px; */
margin: auto;

    @media ${devices.tablet} {
        padding-block: 50px;
        padding-inline: 40px;
    }

     @media ${devices.mobile} {
        padding-block: 40px;
        padding-inline: 20px;
    }

    
.banner img{
    width: 100%;
    position: relative;
}


.profile{
    position: absolute;
    top: 210px;
    left: 185px;
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--white-250);
    background-color: var(--white-50);
    border-radius: 8px;
    padding-block: 20px;
    padding-inline: 25px;

    @media ${devices.tablet}{
       width: 80%;
       top: 240px;
       left: 80px;
    }

      @media ${devices.mobile}{
           width: 90%;
           top: 180px;
           left: 18px;
    }
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
        align-items: start;
        gap: 12px;
    }
}


.profile-pic img{
    background-size: contain;
    border-radius: 50%;
    width: 60px;
    height: 60px;
}


.profile-flex-col{
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: start;
 gap: 10px;
}


.Name{
    color: #18191C;
    font-size: 20px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 2px;
    line-height: 28px;

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
}

.profile-content{
    padding-block: 100px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 30px;

    @media ${devices.tablet}{
        flex-direction: column;
        padding-block: 70px;
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
    align-items: start;
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

.flex-col{
    display: flex;
    /* flex-direction: column; */
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
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 25px;
}


.flex-div{
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 18px;
    align-items: start;
}

.content{
    display: flex;
    justify-content: start;
    gap: 14px;
    align-items: start;
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

.Color{
    color: var(--purple-600);
}


`


//---------- contact 
export const Contact = styled.div`

.boxHeading{
    color: #18191C;
    font-size: 15px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 28px;
    padding-bottom: 20px;
}

.flex{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
}

.content{
    display: flex;
    justify-content: start;
    gap: 8px;
    align-items: start;

    @media ${devices.mobile}{
        flex-direction: row;
    }
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

export const UploadPdf = styled.div`
    padding-block: 20px;
    padding-inline: 16px;
    background-color: var(--gray-450);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${devices.tablet}{
        justify-content: start;
        padding-inline: 12px;
        width: 40%;
    }

    @media ${devices.mobile}{
    width: 70%;
    padding-inline: 12px;
    justify-content: start;
    }

.center{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.Title{
    color: var(--dark-800);
    font-size: 14px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 6px;
}

.title span{
    color: var(--gray-400);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
}

.info{
    color: var(--gray-400);
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);
}

.IconColor{
    color: var(--purple-600);
}
`