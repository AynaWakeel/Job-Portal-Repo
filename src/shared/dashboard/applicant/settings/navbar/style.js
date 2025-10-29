import styled from "styled-components";
import { devices } from "../../../../../components/breakpoints";


export const Settings = styled.div`
padding-top: 50px;
padding-inline: 20px;


  .Fixednav {
    position: sticky; 
    top: 90px;
    background: white;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .ScrollContent {
    flex: 1;
    overflow-y: auto; 
    padding-top: 0px;
    padding-bottom: 20px;
  }

.TopHeading{
    color: var(--dark-800);
    font-size: 20px;
    font-weight: 500;
    font-family: var(--inter);
    padding-bottom: 10px;

    
    
@media ${devices.tablet}{
   padding-bottom: 5px;
}

@media ${devices.mobile}{
    padding-bottom: 0px;
}
}


.Navlinks{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 10px;
    list-style: none;
    border-bottom: 1px solid var(--purple-50);
    
    @media ${devices.laptop}{
        gap: 0px;
    }

     @media ${devices.mobile}{
        flex-wrap: wrap;
    }

     @media ${devices.tablet}{
        flex-wrap: wrap;
    }

}

.Navlinks li{
    padding-block: 14px;
    padding-left: 10px;
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    width: 100%;
    cursor: pointer;

    
    @media ${devices.laptop}{
            gap: 5px;
    }
    

    @media ${devices.tablet}{
        width: 48%;
        gap: 15px;
    }

     @media ${devices.mobile}{
        width: 48%;
        gap: 15px;
        padding-left: 0px;
    }
}

.tab.active{
    padding-block: 13px;
    border-bottom: 3px solid var(--purple-600);
} 

.tab.active a{
    color: var(--purple-600);

}

.tab.active .IconColor{
    color: var(--purple-600);

}

.Navlinks li:hover{
    padding-block: 13px;
    border-bottom: 3px solid var(--purple-600);
} 

.Navlinks li:hover a{
    color: var(--purple-600);

}

.Navlinks li:hover .IconColor{
    color: var(--purple-600);

}

.Navlinks a{
    text-decoration: none;
    color: var(--gray-400);
    font-size: 17px;
    font-weight: 400;
    font-family: var(--inter);
}

.IconColor{
    color: var(--gray-400);
}
`