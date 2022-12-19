import CardPayment from "../../../components/CardPayment/CardPayment";
import CardValues from "../../../components/CardValues/CardValues";
import SectionButton from "../../../components/SectionButton/SectionButton";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { PaymentContainer } from "./styles";

export default function Payment() {
  return (
    <PaymentContainer>
      <SectionTitle title="Cartão de Crédito" />
      <CardPayment />
      <CardValues />
      <SectionButton name="Finalizar Pedido" />
  
    </PaymentContainer>
  );
}