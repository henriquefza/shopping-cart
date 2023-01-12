import { CardValuesContainer } from "./styles";

export default function CardValues() {
  return (
    <CardValuesContainer>
      <p>Produtos</p>
      <p className="price">R$ 624,80</p>
      <p>Frete</p>
      <p className="price">R$ 5,30</p>
      <p>Desconto</p>
      <p className="price">- R$ 30,00</p>
      <p>Total</p>
      <p className="price">R$ 600,10</p>
    </CardValuesContainer>
  );
}