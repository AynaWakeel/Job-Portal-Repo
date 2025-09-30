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
    width: 100%;
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


.form-div{
    width: 80%;
}

.SubHeading{
    margin-top: 20px;
    color: var(--dark-800);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    padding-bottom: 10px;

    
@media ${devices.tablet}{
    font-size: 20px;

}

@media ${devices.mobile}{
    font-size: 20px;
}
}

.FormError{
    padding-bottom: 10px;
    color: #e43f3fff;
    font-size: 14px;
    font-weight: 400;
    font-family: var(--poppin); 
    text-align: start;

    @media ${devices.tablet} {
       color: #d14242ff;  
    }
     
    @media ${devices.mobile}{
    color: #d14242ff;  
    }
}

`

export const ProfilePic = styled.div`
    width: 300px;
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

//-------------- react quill

.Quillbar{
    margin-top: 10px;
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


//---------- select lib

.select{
    outline: none;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);
}

.inputSelect{
   font-size: 15px;
    font-weight: 400;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);
}


.select__control {
    outline: none;
  min-height: 58px !important;
  border: 1px solid var(--white-200) !important;
}

.select__control--is-focused {
  border-color: var(--purple-50) !important;
  box-shadow: 0 0 0 1px var(--purple-200);
}

.select__control:hover {
  border-color: var(--purple-50) !important;
}


.select__menu{
    padding: 0px;
}

.select__option{
background-color: #c3b9d1ff;
}

.select__option--is-selected {
    font-size: 15px;
    font-weight: 400;
    color: var(--purple-200);
    font-family: var(--poppin);
}

.select__option--is-focused {
  background-color: var(--purple-70);
}

`

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

