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
    padding-bottom: 14px;
    display: flex;
    flex-direction: column;
  }

  .flex-col-left {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .flex-col-right {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
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
`

export const ChatLeft = styled.div`
  min-width: 200px;
  max-width: 350px;
  padding: 10px;
  background-color: var(--white-50);
  border-radius: 20px 20px 20px 0;

    @media ${devices.mobile}{
        min-width: 180px; 
        max-width: 250px;
    }

  .SubHeading {
    color: var(--purple-200);
  }
`

export const ChatRight = styled.div`
  min-width: 200px;
  max-width: 350px;
  padding: 10px;
  background-color: var(--purple-200);
  border-radius: 20px 20px 0 20px;

   @media ${devices.mobile}{
        min-width: 180px; 
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
