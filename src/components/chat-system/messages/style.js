import styled from "styled-components"

export const DmChat = styled.div`
border-top-right-radius: 25px;
background-color: #adb4e0ff;
width: 100%;
height: 86vh;
display: flex;
flex-direction: column;
justify-content: space-between;

//------------top bar
.bar{
    border-bottom: 1px solid #DBDDE1;
    padding-bottom: 18px;
    position: relative;

}

.channelheader{
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: start;
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

//----------------- bottom bar
.msgBar{
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-inline: 10px;
    margin-bottom: 10px;
    padding-top: 3px;
}

.msginput{
    width: 920px;
    max-width: 950px;
    border: 1px solid #DBDDE1;
    background-color: var(--white-50);
    border-radius: 30px;
    padding-block: 14px;
    padding-inline: 20px;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);
}

.msginput::placeholder{
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
}

.circle{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: var(--purple-200);
    border-radius: 50%;
}
`

export const MessageBox = styled.div`
padding: 6px;
display: flex;
flex-direction: column;
/* justify-content: space-between; */
/* align-items: center; */
height: 100vh;
overflow-y: scroll;

.full-width{
    width: 100%;
    display: block;
    padding-bottom: 14px;
}

.flex-col-left{
    float: left;
    display: flex;
    flex-direction: column;
    gap: 5px;
}


.flex-col-right{
    float: right;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
}

.SubHeading{
    color: var(--purple-200);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.time{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 6px;
    align-items: center;
}

.color{
    color: var(--white-50);
}

.color.active{
    color: var(--purple-600);
}

.half-width{
    width: 50%;

}

`

export const ChatLeft = styled.div`
min-width: 250px;
max-width: 350px;
padding: 10px;
background-color: var(--white-50);
border-top-left-radius: 20px;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
float: left;


.SubHeading{
    color: var(--purple-200);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}
`

export const ChatRight = styled.div`
min-width: 250px;
max-width: 350px;
padding: 10px;
background-color: var(--purple-200);
border-top-left-radius: 20px;
border-top-right-radius: 20px;
border-bottom-left-radius: 20px;
float: right;

.SubHeading{
    color: var(--white-50);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}
`

export const Options = styled.div`
position: absolute;
bottom: 55px;
background-color: #1D1F1F;
border-radius: 12px;

.dropdown{
    list-style: none;
}

.dropdown li{
    text-decoration: none;
    padding-block: 10px;
    padding-inline: 28px;
    color: var(--white-50);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.dropdown li:hover{
    background-color: var(--purple-50);
    color: var(--purple-600);
}

`


// export const HiddenFileInput = styled.input.attrs({ type: 'file' })`
//       opacity: 0;
//       position: absolute;
//       width: 1px;
//       height: 1px;
//       overflow: hidden;
//       clip: rect(0, 0, 0, 0);
//       white-space: nowrap;
// `