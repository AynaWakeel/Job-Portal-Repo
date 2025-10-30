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

  .full-width {
    width: 100%;
    display: flex;
    flex-direction: column;
  }


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
