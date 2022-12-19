import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  
  p {
    font-size: 1.5rem;
    color:  ${props => props.theme['gray-400']};
  }
`;