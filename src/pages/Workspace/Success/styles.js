import styled from "styled-components";
import SectionTitleContainer from "../../../components/SectionTitle/styles"

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Payment = styled.div`
  display: flex;
  width: 100%;
  background: ${props => props.theme['gray-100']};
  border-radius: 10px;
  padding: 1rem;
  gap: 0.5rem;

  > p {
    color: ${props => props.theme['gray-600']};
    align-self: flex-end;
    font-weight: 700;
  }

`;