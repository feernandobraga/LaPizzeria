import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderPage from "./pages/OrderPage";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={OrderPage} exact />
      <Route path="/orderConfirmed" component={OrderConfirmation} />
    </BrowserRouter>
  );
}

export default Routes;
