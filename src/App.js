import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom";
import { ShoppingCart } from "./routes/ShoppingCart";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaut";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCart />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
