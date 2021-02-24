import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import PizzaCard from "../../components/PizzaCard";
import margheritaImg from "../../assets/images/margherita.jpg";
import bbqBeefImg from "../../assets/images/bbq-beef.jpg";
import prawnImg from "../../assets/images/prawn.jpg";
import chickenBaconImg from "../../assets/images/smoky-chicken-bacon.jpg";
import "./styles.css";
import { Grid } from "@material-ui/core";

const OrderPage = () => {
  const [selectedPizza, setSelectedPizza] = useState("");

  const margherita = {
    title: "Margherita",
    description: "Diced tomato & mozzarella, finished with oregano & garlic.",
    image: margheritaImg,
    price: 10.99,
  };

  const bbqBeef = {
    title: "BBQ Beef",
    description: "Lightly seasoned beef & mozzarella on rich BBQ sauce",
    image: bbqBeefImg,
    price: 14.99,
  };

  const prawn = {
    title: "Prawn",
    description:
      "Succulent prawns, garlic, mushrooms, onion, mozzarella on a creamy alfredo base, finished with parsley.",
    image: prawnImg,
    price: 19.99,
  };

  const chickenBacon = {
    title: "Chicken & Bacon",
    description:
      "Tender chicken, streaky bacon rashers, diced tomato, onion  & mozzarella finished with smoky BBQ drizzle",
    image: chickenBaconImg,
    price: 13.99,
  };

  const availablePizzas = [margherita, bbqBeef, prawn, chickenBacon];

  function handleSelectPizza(pizza) {
    setSelectedPizza(pizza);
    console.log(`Pizza selected ${pizza}`);
  }

  return (
    <>
      <PageHeader />
      <main className="pizza-menu">
        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
          {availablePizzas.map((pizza, index) => {
            return (
              <Grid key={index} item xs={12} md={6} xl={3}>
                <PizzaCard
                  key={index}
                  title={pizza.title}
                  description={pizza.description}
                  image={pizza.image}
                  price={pizza.price}
                  isSelected={pizza.title === selectedPizza ? true : false}
                  onSelectPizza={() => handleSelectPizza(pizza.title)}
                />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </>
  );
};

export default OrderPage;
