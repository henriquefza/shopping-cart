import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import CardValues from "../../../components/CardValues/CardValues";
import SectionButton from "../../../components/SectionButton/SectionButton";
import { CartContainer } from "./styles";
import CardProducts from "../../../components/CardProducts/CardProducts";

export default function Cart() {
  return (
    <CartContainer>
      <SectionTitle title="Produtos" />
      <CardProducts 
      img="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
      description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
      price="225.9"
      />
      <CardProducts 
      img="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
      description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
      price="225.9"
      />
      <CardProducts 
      img="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
      description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
      price="225.9"
      />
      <CardValues />
      <SectionButton name="Seguir para o Pagamento" />
    </CartContainer>
  );
}
