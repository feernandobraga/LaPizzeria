import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import PizzaCard from "../../components/PizzaCard";
import margheritaImg from "../../assets/images/margherita.jpg";
import bbqBeefImg from "../../assets/images/bbq-beef.jpg";
import prawnImg from "../../assets/images/prawn.jpg";
import chickenBaconImg from "../../assets/images/smoky-chicken-bacon.jpg";
import "./styles.css";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const OrderPage = () => {
  const [selectedPizza, setSelectedPizza] = useState("");
  const [formData, setFormData] = useState({
    quantity: 1,
    size: "Medium",
    crust: "Stuffed",
  });
  const [formError, setFormError] = useState("");
  const [pizzaSize, setPizzaSite] = useState("Small");
  // const [formHasErrors, setFormHasErrors] = useState(false);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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

  const handleSelectPizza = (pizza) => {
    setSelectedPizza(pizza);
    // console.log(`Pizza selected ${pizza}`);
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedPizza === "") {
      setFormError("You must select a Pizza");
    } else {
      setFormError("");
      setFormData({
        ...formData,
        selectedPizza,
      });
    }
  };

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

      <article>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={4}>
              <TextField
                id="pizza-quantity"
                fullWidth
                label="Quantity"
                variant="outlined"
                name="quantity"
                value={formData.quantity}
                type="number"
                onChange={handleOnChange}
                // required
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="pizza-size">Size</InputLabel>
                <Select
                  labelId="pizza-size"
                  name="size"
                  value={formData.size}
                  onChange={handleOnChange}
                  label="Size"
                >
                  <MenuItem value={"Small"}>Small</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Large"}>Large</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="pizza-crust">Crust</InputLabel>
                <Select
                  labelId="pizza-crust"
                  name="crust"
                  value={formData.crust}
                  onChange={handleOnChange}
                  label="Size"
                >
                  <MenuItem value={"Traditional"}>Traditional</MenuItem>
                  <MenuItem value={"Stuffed"}>Stuffed</MenuItem>
                  <MenuItem value={"GlutenFree"}>Gluten Free</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                // id="client-name"
                fullWidth
                label="Client Name"
                variant="outlined"
                name="clientName"
                // required
                // onChange={handleOnChange}
                // error={!!formErrors.clientName}
                // helperText={formErrors.clientName}
                // onBlur={validateForm}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                // id="outlined-basic"
                fullWidth
                label="Address"
                variant="outlined"
                name="Address"
                // required
                // onChange={handleOnChange}
                // error={!!formErrors.clientName}
                // helperText={formErrors.clientName}
                // onBlur={validateForm}
              />
            </Grid>

            <Grid item sm={12} md={6}>
              <Button
                variant="outlined"
                // color="tertiary"
                type="submit"
                fullWidth
                id="submit-button"
                size="large"
              >
                Submit
              </Button>
            </Grid>
            <Grid item sm={12} md={6}>
              <Button
                variant="outlined"
                color="secondary"
                type="submit"
                fullWidth
                size="large"
              >
                Cancel
              </Button>
            </Grid>
            {formError ? <small className="form-error">{formError}</small> : null}
          </Grid>
        </form>
      </article>
    </>
  );
};

export default OrderPage;
