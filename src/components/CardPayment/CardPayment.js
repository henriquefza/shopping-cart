import { CardPaymentContainer } from "./styles";

export default function CardPayment() {
  return (
    <CardPaymentContainer>
      <p className="cardNumber">Número do Cartão:</p>
      <input placeholder="____.____.____.____" type="number" className="cardNumber" />
      <p className="cardHolder">Nome do Titular:</p>
      <input placeholder="Insira conforme descrito no cartão" className="cardHolder" />
      <p className="expirationDate">Validade (mês/ano):</p>
      <input placeholder="__/____" className="expirationDate" />
      <p className="securityCode">CVV:</p>
      <input placeholder="___" type="number" className="securityCode" />
    </CardPaymentContainer>
  );
}