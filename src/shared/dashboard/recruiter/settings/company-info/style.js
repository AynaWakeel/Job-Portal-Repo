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
    font-size: 20px;
     padding-bottom: 5px;

}

@media ${devices.mobile}{
    font-size: 20px;
     padding-bottom: 0px;
}
}

.Divide{
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 20px;
}

.flex-top{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 25px;
    width: 100%;

    
    @media ${devices.tablet}{
        flex-direction: column;
        align-items: start;
        gap: 15px;
    }

     @media ${devices.mobile}{
        flex-direction: column;
        gap: 10px;
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
    font-size: 18px;

}

@media ${devices.mobile}{
    font-size: 14px;
    margin-top: 5px;
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


export const Uploadbanner = styled.div`
    width: 900px;
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
        justify-content: start;
        padding-inline: 12px;
        width: 100%;
    }

    @media ${devices.mobile}{
    width: 100%;
    padding-inline: 12px;
    justify-content: start;
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

export const Form = styled.div`
width: 100%;
margin-top: 10px;

    @media ${devices.tablet}{
    width: 100%;
    }

    @media ${devices.mobile}{
    width: 100%;
    }

.FormSpace{
   padding-block: 10px;
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

//-------------- react quill

.Quillbar{
    outline: none;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    width: 100%;
    caret-color: var(--purple-300);
    margin-top: 15px;
}

.Quillbar .ql-editor{
    min-height: 200px;
    max-height: 300px;
    overflow-y: auto;
}

`
