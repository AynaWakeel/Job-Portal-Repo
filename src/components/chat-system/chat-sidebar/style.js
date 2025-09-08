import styled from "styled-components";

export const ChatDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: end;
padding-top: 100px;
height: 100vh;
`

export const ChatSidebar = styled.div`
border-top-left-radius: 25px;

background-color: var(--purple-200);
width: 32%;
height: 100%;

.searchinput{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
    width: 96%;
    margin-inline: 10px;
    border: 1px solid var(--white-200);
    background-color: var(--white-50);
    border-radius: 30px;
    padding-block: 14px;
    margin-top: 10px;
    padding-inline: 20px;
    margin-bottom: 15px;
}

.searchinput input{
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);
    border: none;
    width: 100%;
    
}

.searchinput input::placeholder{
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
}

.channel{
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 10px;
    padding-block: 12px;
    padding-inline: 10px;
    border-bottom: 1px solid #6a54baff;
}

.channel.active{
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 10px;
    padding-block: 12px;
    padding-inline: 10px;
    background-color: var(--purple-50);
    /* border: 1px var(--purple-200); */
}

.channeltxt{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.Heading.active{
    color: var(--purple-200);
    font-size: 16px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
    padding-bottom: 5px;
}

.SubHeading.active{
    color: var(--purple-200);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.circle{
    width: 55px;
    height: 55px;
    background-color: var(--purple-600);
    border-radius: 50%;
}

.Heading{
    color: var(--purple-50);
    font-size: 16px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
    padding-bottom: 5px;
}

.SubHeading{
    color: var(--purple-50);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}
`

export const DmChat = styled.div`
border-top-right-radius: 25px;
background-color: #adb4e0ff;
/* background-color: var(--purple-50); */
width: 68%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`