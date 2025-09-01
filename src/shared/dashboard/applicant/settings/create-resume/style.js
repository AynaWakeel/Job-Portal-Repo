import styled from "styled-components";
import { devices } from "../../../../../components/breakpoints";

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

    @media ${devices.mobile}{
        flex-direction: column;
    }
}

.FormGapDivide{
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

.SelectFlex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.Input{
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
    color: #9199A3;
    width: 200px;
}

.Input:active{
    color: var(--purple-600);
}

.Input::placeholder{
    font-size: 16px;
    font-weight: 400;
    font-family: var(--inter);
}

.simple-dropdown{
    position: relative;
}
`

export const ForgetDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-block: 10px;

.CheckBoxSpan{
    font-size: 16px;
    font-weight: 400;
    font-family: var(--poppin);
    display: flex;
    justify-content: start;
    gap: 8px;
    color: var(--dark-800);
}
`

export const Checkbox = styled.input.attrs({type:'radio'})`
width: 20px;
height: 20px;
color: var(--gray-250);
cursor: pointer;
`

//--------------
export const Dropdown = styled.div`
width: 100%;
background-color: #c3b9d1ff;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
position: absolute;
top: 52px;
left: 0px;
z-index: 999;

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
