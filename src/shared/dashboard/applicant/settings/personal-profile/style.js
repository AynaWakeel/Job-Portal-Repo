import styled from "styled-components";
import { devices } from "../../../../../components/breakpoints";

export const SettingDiv = styled.div`
padding-block: 20px;


.TopHeading{
    color: var(--dark-800);
    font-size: 20px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 15px;

    
@media ${devices.tablet}{
    font-size: 30px;

}

@media ${devices.mobile}{
    font-size: 26px;
}
}

.Divide{
    display: flex;
    justify-content: start;
    gap: 20px;

    @media ${devices.tablet}{
        flex-direction: column;
    }

     @media ${devices.mobile}{
        flex-direction: column;
    }
}


.SubHeading{
    margin-top: 20px;
    color: var(--dark-800);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    padding-bottom: 10px;

    
@media ${devices.tablet}{
    font-size: 30px;

}

@media ${devices.mobile}{
    font-size: 26px;
}
}

`

export const ProfilePic = styled.div`
    width: 240px;
    height: 240px;
    padding-block: 30px;
    padding-inline: 20px;
    background-color: var(--gray-450);
    border: 2px dashed var(--gray-350);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${devices.tablet}{
    width: 100%;

    }

    @media ${devices.mobile}{
    width: 100%;
    }

.center{
    text-align: center;
}

.TopHeading{
    color: var(--dark-800);
    font-size: 14px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 6px;
}

.TopHeading span{
    color: var(--gray-400);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
}

.Para{
    color: var(--gray-400);
    font-size: 12px;
    font-weight: 400;
    font-family: var(--inter);

}
`
export const UploadPdf = styled.div`
    margin-top: 20px;
    padding-block: 20px;
    padding-inline: 6px;
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
    width: 100%;
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
`

export const Form = styled.div`
width: 75%;
margin-top: 10px;
margin-inline: auto;

    @media ${devices.tablet}{
    width: 100%;
    }

    @media ${devices.mobile}{
    width: 100%;
    }

.FormSpace{
   padding-block: 10px;
}

.FormInputDivide{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

    @media ${devices.mobile}{
        flex-direction: column;
    }
}

.InputWidth{
    width: 50%;

    @media ${devices.mobile}{
        width: 100%;
    }
}

.FormInput{
    outline: none;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    padding-block: 16px;
    margin-top: 10px;
    padding-inline: 20px;
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);
}

.Label{
    font-size: 14px;
    font-weight: 400;
    color: var(--dark-800);
    font-family: var(--inter);
}

.FormInput::placeholder{
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
}

.FormBtn{
    background-color: var(--purple-600);
    color: var(--white-50);
    outline: none;
    border: none;
    padding-block: 15px;
    padding-inline: 20px;
    border-radius: 4px;
    margin-top: 8px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}

`
