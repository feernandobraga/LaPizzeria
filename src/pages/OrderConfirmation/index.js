import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

const OrderConfirmation = () => {
  const history = useHistory();
  return (
    <>
      <PageHeader />
      <main className="order-success">
        <h1>Thank you! 🍕</h1>
        <Button id="buy-more" size="large" fullWidth onClick={() => history.push("/")}>
          I want more!
        </Button>
      </main>
    </>
  );
};

export default OrderConfirmation;
