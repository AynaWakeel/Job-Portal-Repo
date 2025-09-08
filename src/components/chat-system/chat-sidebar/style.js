import styled from "styled-components";
import { devices } from "../../breakpoints";

export const ChatDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 100px;
  height: 100vh;
  overflow-y: hidden;

  @media ${devices.mobile} {
    flex-direction: column; 
    padding-top: 60px;
  }
`

export const ChatSidebar = styled.div`
  border-top-left-radius: 25px;
  background-color: var(--purple-200);
  flex: 0 0 32%; 
  display: flex;
  flex-direction: column;

  &.desktop {
    display: flex;

    @media ${devices.mobile} {
      display: none;
    }

    @media ${devices.tablet} {
        flex: 0 0 40%;
    }
  }

  &.mobile {
    display: none;

    @media ${devices.mobile} {
      margin-top: 35px;
      display: flex !important;
      flex: 1;
      width: 100%;
      height: 100%;
      border-top-left-radius: 0px;
    }
  }

  .searchinput {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 96%;
    margin-inline: 10px;
    border: 1px solid var(--white-200);
    background-color: var(--white-50);
    border-radius: 30px;
    padding: 14px 20px;
    margin: 10px auto 15px;
  }

  .searchinput input {
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: var(--purple-200);
    caret-color: var(--purple-300);
    font-family: var(--poppin);
    border: none;
    flex: 1;
  }

  .searchinput input::placeholder {
    color: var(--gray-250);
    font-family: var(--poppin);
    font-weight: 400;
    font-size: 16px;
  }

  .channel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 12px 10px;
    border-bottom: 1px solid #6a54ba;
    cursor: pointer;
  }

  .channel.active {
    background-color: var(--purple-50);
  }

  .channeltxt {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .circle {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }

  .Heading {
    color: var(--purple-50);
    font-size: 16px;
    font-weight: 500;
    font-family: var(--inter);
    line-height: 20px;
    padding-bottom: 5px;
  }
  .Heading.active {
    color: var(--purple-200);
  }

  .SubHeading {
    color: var(--purple-50);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
  }
  .SubHeading.active {
    color: var(--purple-200);
  }
`

export const DmChat = styled.div`
  border-top-right-radius: 25px;
  background-color: #adb4e0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &.desktop {
    display: flex;

    @media ${devices.mobile} {
      display: none;
    }
     @media ${devices.tablet} {
        width: 60%;
    }
  }

  &.mobile {
    display: none;

    @media ${devices.mobile} {
      display: flex !important;
      flex: 1;
      width: 100%;
      height: 100%;
      border-top-right-radius: 0px;
      margin-top: 30px;
    }
  }

  .backbtn {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin: 10px;
    cursor: pointer;
    color: var(--purple-600);
  }
`
