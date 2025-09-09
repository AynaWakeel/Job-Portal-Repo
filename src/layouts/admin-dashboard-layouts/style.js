import styled from "styled-components";
import { devices } from "../../components/breakpoints";

//--- sidebar
export const Dashboard = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  gap: 10px;
  position: relative;

  @media ${devices.mobile} {
    justify-content: start;
  }

  .dashboard-size {
    flex: none;
    width: 80%;
    position: relative;
    top: 70px;
    z-index: 10;

    @media ${devices.mobile} {
      width: 100%;
      flex: 1;
    }
    @media ${devices.tablet} {
        width: 75%;
    }
    
    &.full-width {
        top: 0px;
        width: 100% !important;
    }
  }
`
