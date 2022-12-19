import { SectionTitleContainer } from "./styles";

export function SectionTitle ({ title }) {
  return (
    <SectionTitleContainer>
      <p>{title}</p>
    </SectionTitleContainer>
  );
}