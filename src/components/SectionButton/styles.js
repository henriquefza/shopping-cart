import styled from "styled-components";

export const ButtonContainer = styled.button`

  width: 100%;
  padding: 0.75rem 2.8rem;
  color: ${props => props.theme['white']};
  font-weight: 700;
  background: ${props => props.theme['green-300']};
  font-size: 20px;
  border: none;
  border-radius: 6px;
  margin-top: 0.7rem;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 2.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${props => props.theme['green-700']};
  }
`;