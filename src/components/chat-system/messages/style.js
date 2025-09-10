import styled from "styled-components";
import { devices } from "../../breakpoints";

export const DmChat = styled.div`
  border-top-right-radius: 25px;
  background-color: #adb4e0;
  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

.desktop {
  display: flex;
}

.mobile {
  display: none;
  
@media ${devices.mobile}{
    display: flex !important;
    flex: 1;
    width: 100%;
    height: 100%;
    border-top-right-radius: 0px;
  }
}

//------------top bar
.bar {
    /* border-bottom: 1px solid #dbdde1; */
    padding-bottom: 8px;
}

.channelheader {
    margin: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

.display {
  display: none;
}

.display {
      @media ${devices.mobile} {
    display: flex;
  }
}

.color {
    cursor: pointer;
    color: var(--purple-600);
}

.Heading.active {
    color: var(--purple-200);
    font-size: 16px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
    padding-bottom: 5px;
  }

  .SubHeading.active {
    color: var(--purple-200);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
  }

  //----------------- bottom bar
  .msgBar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 10px 10px;
  }

  .msginput {
    min-width: 910px;
    max-width: 920px;
    border: 1px solid #dbdde1;
    background-color: var(--white-50);
    border-radius: 30px;
    padding: 14px 20px;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);

    @media ${devices.mobile}{
        min-width: 270px;
        max-width: 300px;
    }
    @media ${devices.tablet}{
        min-width: 380px;
        max-width: 400px;
    }
  }

  .msginput::placeholder {
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: var(--purple-200);
    border-radius: 50%;
  }

//---------- gallery img
/* .gallery-div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;        
  width: 100vw;
  background: rgba(0,0,0,0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.gallery-header {
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.close-icon,
.download-icon {
  width: 32px;
  height: 32px;
  cursor: pointer;
  filter: brightness(0) invert(1);
}

.gallery-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.gallery-body img {
  max-height: 95vh;   
  max-width: 95vw;   
  width: auto;
  height: auto;
  object-fit: contain;
} */


.gallery-div{
  position: fixed;
  height: 88%;
  width: 68%;
  background: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  overflow-y: scroll;
}

.gallery-header{
  display: flex;
  justify-content: start;
  align-items: center;
}

/* .gallery-body img{
  width: 40vw;
} */

.gallery-body img {
  max-height: 60vh;   /* image will be 60% of screen height */
  max-width: 90vw;    /* prevent overflow on small screens */
  width: auto;        /* keep natural aspect ratio */
  height: auto;       /* keep natural aspect ratio */
  object-fit: contain; /* prevent stretching */
}


`

export const MessageBox = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

   &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--white-50);
    border-radius: 10px;
  }

  .full-width {
    width: 100%;
    /* padding-bottom: 14px; */
    display: flex;
    flex-direction: column;
  }

  .flex-col-left {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
  }

  .flex-col-right {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-end;
    margin-bottom: 5px;
  }

  .SubHeading {
    color: var(--purple-200);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
  }

  .time {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .color {
    color: var(--white-50);
  }
  .color.active {
    color: var(--purple-600);
  }
//------


//---------
.chat-bubble {
  margin-bottom: 0px;
}

.chat-image{
    position: relative;
    width: 100%;
    height: auto;
}

.pic-overlay{
  position: absolute;
 top: 0px;
 display: flex;
 justify-content: end;
 align-items: center;
  color: var(--white-50);
  width: 100%;
  padding: 10px;
  /* background: rgba(0,0,0,0.5); */
   font-size: 25px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;

}

.chat-image img {
position: relative;
  width: 280px;
  border-radius: 10px;
  margin-bottom: 5px;

  @media ${devices.mobile}{
    width: 200px;
  }
}

/* -------- 1st msg-------- */
.chat-bubble.sender.first {
  border-radius: 20px; 
}
.chat-bubble.receiver.first {
  border-radius: 20px; 

}
.chat-bubble.receiver:not(.first):not(.last){
  border-radius: 16px;
}

/* -------- last msg-------- */
.chat-bubble.sender.last {
  border-radius: 20px 20px 0 20px; 
}
.chat-bubble.receiver.last {
  border-radius: 20px 20px 20px 0; 
}

.chat-bubble.sender:not(.first):not(.last) {
  border-radius: 16px; 
}

//------------------- phoyo galley
.flex{
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
}

//---------------- file chat
.file-div{
  width: 220px;
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: start;

  @media ${devices.mobile}{
    width: 150px;
  }
}

.fileInput{
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: start;
}

.fileInput img{
  width: 40px;
}

.file-txt-flex{
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
  align-items: start;
}

.filename{
    font-size: 15px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
}

.filesize{
    font-size: 13px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
}

.filename.right{
    font-size: 15px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
    color: var(--white-50);
}

.filesize.right{
    font-size: 13px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
    color: var(--white-50);
}

`

export const ChatLeft = styled.div`
 display: inline-block;
  max-width: 350px;
  padding: 10px;
  background-color: var(--white-50);
  /* word-wrap: break-word; */
  /* overflow-wrap: anywhere; */

    @media ${devices.mobile}{
        max-width: 250px;
    }

  .SubHeading {
    color: var(--purple-200);
  }
`

export const ChatRight = styled.div`
 display: inline-block;
  max-width: 350px;
  padding: 10px;
  background-color: var(--purple-200);
  /* word-wrap: break-word;  */
  /* overflow-wrap: anywhere; */

   @media ${devices.mobile}{
        max-width: 250px;
    }

  .SubHeading {
    color: var(--white-50);
  }
`

export const Options = styled.div`
  position: absolute;
  bottom: 55px;
  background-color: #1d1f1f;
  border-radius: 12px;

  .dropdown {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .dropdown li {
    padding: 10px 28px;
    color: var(--white-50);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
    cursor: pointer;
  }

  .dropdown li:hover {
    background-color: var(--purple-50);
    color: var(--purple-600);
  }
`
