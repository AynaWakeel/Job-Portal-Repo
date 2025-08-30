import styled from "styled-components"

export const FormDiv = styled.div`
background-color: var(--purple-70);
width: 540px;
padding: 30px;
margin: auto;


    @media (max-width: 900px) {
    width: 90%;
    background-color: var(--purple-10);
    }
    
    @media (max-width: 600px){
    width: 100%;
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
`

export const Form = styled.div`
margin-top: 10px;
/* width: 100%; */
margin-inline: auto;

.FormSpace{
   padding-block: 7px;
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
    width: 20px;
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
    margin-top: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}
`

export const TextDiv = styled.div`
padding-top: 5px;
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
`
