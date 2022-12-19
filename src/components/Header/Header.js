import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>

      <NavLink to="/">Sacola</NavLink>
      <NavLink to="/payment">Pagamento</NavLink>
      <NavLink to="/success">Confirmação</NavLink>

    </HeaderContainer>
  );
}