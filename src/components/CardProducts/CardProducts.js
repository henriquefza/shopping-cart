import { CardProductsContainer } from "./styles";


export default function CardProducts({img, description, price}) {
  return (
    <CardProductsContainer>
      <img src={img} alt="" />
      <p>{description}</p>
      <p>{price}</p>
    </CardProductsContainer>
  );
}