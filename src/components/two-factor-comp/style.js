import styled from "styled-components";
import { devices } from "../../components/breakpoints";

export const SettingDiv = styled.div`
/* padding-block: 20px; */

.Gapdiv{
    padding-top: 65px;

@media ${devices.tablet}{
   padding-top: 40px;
}

@media ${devices.mobile}{
   padding-top: 30px;

}

}

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

.middiv{
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
}

//------ qrcode
.QRBox{
    padding: 14px;
    box-shadow:0px 0px 15px var(--purple-50);
    border-radius: 8px;
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
    padding-top: 15px;

    
@media ${devices.tablet}{
    font-size: 15px;

}

@media ${devices.mobile}{
    font-size: 15px;
}
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
     @media ${devices.tablet}{
        flex-direction: column;
    }
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
export const QrForm = styled.div`


/* .Formdiv{
   padding-block: 10px;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: start;
} */

.flex-col{
   padding-block: 10px;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: start;
}

.qrInput{
    outline: none;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    padding-block: 16px;
    margin-top: 10px;
    padding-inline: 20px;
    font-size: 15px;
    font-weight: 400;
    width: 300px;
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

.qrInput::placeholder{
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
}

.Btn{
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