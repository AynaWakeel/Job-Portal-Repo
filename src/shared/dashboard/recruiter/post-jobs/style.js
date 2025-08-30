import styled from "styled-components";
import { devices } from "../../../../components/breakpoints";

export const Jobdiv = styled.div`
padding-block: 30px;
padding-inline: 20px;
`

export const SettingDiv = styled.div`
padding-block: 20px;

.spacetop{
    padding-top: 25px;
}

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
    min-height: 300px;
    max-height: 400px;
    overflow-y: auto;
}
`

export const Form = styled.div`
width: 100%;
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



.eyeimg{
    position: absolute;
    right: 16px;
    top: 44px;
    width: 20px;
    cursor: pointer;
}


.FormInputDivide{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.InputWidth{
    width: 100%;
    position: relative;

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

export const Checkbox = styled.input.attrs({type:'radio'})`
width: 20px;
height: 20px;
color: var(--gray-250);
cursor: pointer;
`