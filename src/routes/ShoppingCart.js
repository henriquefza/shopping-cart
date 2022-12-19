import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../components/DefaultLayout";
import Cart from "../pages/Workspace/Cart/Cart";
import Payment from "../pages/Workspace/Payment/Payment";
import Success from "../pages/Workspace/Success/Success";

export function ShoppingCart() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>

  );

}