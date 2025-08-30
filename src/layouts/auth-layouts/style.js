import styled from "styled-components"

export const AuthDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100vh;

/* ------------- media queries-------------- */
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
}


/*----------- media queries  --------*/
 @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
}
`

export const ImgSec = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: end;
justify-content: center;

.LoginImg{
    width: 95%;
    height: 96%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}


    @media (max-width: 900px) {
    display: none;
    }
    
    @media (max-width: 600px){
       display: none;
    }
`

export const FormSec = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
background-color: #fff;
text-align: center;
height: 100%;
margin: auto;


    @media (max-width: 900px) {
    width: 100%;
    background: linear-gradient(to bottom left, var(--gradient-3), var(--gradient-2), var(--gradient-3));

    }
    
    @media (max-width: 600px){
    width: 100%;
    background: linear-gradient(to bottom left, var(--gradient-3), var(--gradient-2), var(--gradient-3));

    }
`

export const LoginImg = styled.img`
width: 100%;
`
