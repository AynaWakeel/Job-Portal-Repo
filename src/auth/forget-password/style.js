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
    padding-bottom: 5px;

    @media (max-width: 900px) {
    color: var(--purple-50);
    }
    
    @media (max-width: 600px){
    color: var(--purple-50);
    }
}
`

export const Form = styled.div`
margin-top: 10px;
/* width: 100%; */
margin-inline: auto;

.FormSpace{
   padding-block: 10px;
}

.FormInput{
    outline: none;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    padding-block: 16px;
    padding-inline: 20px;
    font-size: 15px;
    font-weight: 400;
    width: 100%;  
    color: var(--purple-200);
    caret-color: var(--purple-300); 
    font-family: var(--poppin);
}

.FormPassword{
    position: relative;
}

.eyeimg{
    position: absolute;
    right: 12px;
    top: 14px;
    cursor: pointer;
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
    width: 100%;
    padding-block: 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}

.OR{
    font-size: 14px;
    color: var(--gray-300);
    font-weight: 500;
    font-family: var(--inter);
    text-align: center;
    padding-block: 10px;
}
`

export const SocialMediaDiv = styled.div`
display: flex;
justify-content: center;
gap: 15px;
align-items: center;

.MediaBtn{
    font-size: 12px;
    font-weight: 500;
    color:var(--dark-700);
    font-family: var(--poppin);
    background-color: var(--white-100);
    outline: none;
    border: none;
    padding-block: 16px;
    border-radius: 4px;
    width: 100%;
    margin-block: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;
    cursor: pointer;
}

.GoogleIcon{
    width: 15px;
}

`

export const TextDiv = styled.div`
padding-top: 2px;
display: flex;
justify-content: start;
align-items: center;
gap: 5px;
font-size: 16px;
font-weight: 400;
font-family: var(--sans);

.Text{
    color: var(--purple-200);

    @media (max-width: 900px) {
    color: var(--white-300);
    }
    
    @media (max-width: 600px){
     color: var(--white-300);
    }
}

.Ahref{
    color: var(--purple-200);
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 900px) {
    color: var(--purple-600);
    font-weight: 600;
    }
    
    @media (max-width: 600px){
     color: var(--purple-600);
    font-weight: 600;
    }
}
`
