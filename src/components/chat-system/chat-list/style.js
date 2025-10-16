import styled from "styled-components"

export const Main = styled.div`

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

  .channel.active .Heading {
    color: var(--purple-200);
  }

  .channel.active .SubHeading{
    color: var(--purple-200);
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

  .SubHeading {
    color: var(--purple-50);
    font-size: 14px;
    font-weight: 400;
    font-family: var(--inter);
    line-height: 20px;
  }

`