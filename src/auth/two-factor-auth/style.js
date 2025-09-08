import styled from "styled-components"

export const FormDiv = styled.div`
background-color: var(--purple-70);
width: 540px;
padding: 30px;
margin: auto;


    @media (max-width: 900px) {
    width: 550px;
    background-color: var(--purple-10);
    }
    
    @media (max-width: 600px){
    max-width: 380px;
    min-width: 350px;
    padding: 15px;
    background-color: var(--purple-10);
    }

.FormH1{
    font-size: 30px;
    font-weight: 700;
    font-family: var(--poppin);
    color: var(--purple-200);
    text-align: start;

    @media (max-width: 900px) {
    color: var(--purple-50);
    }
    
    @media (max-width: 600px){
    color: var(--purple-50);
    }
}



.middiv{
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

//------ qrcode
.QRBox{
    padding: 14px;
    box-shadow:0px 0px 15px var(--purple-200);
    border-radius: 8px;
    width: 220px;
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
    width: 100%;
}
`



