import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  
       a {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme['gray-100']};

        font-size: 1.5rem;

        text-decoration: none;

        box-shadow: 0 0 0 0;

        &.active { 
        color: ${(props) => props.theme['green-500']};
        }
      }
`;