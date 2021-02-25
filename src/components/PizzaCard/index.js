import React from "react";

import "./styles.css";

const PizzaCard = (props) => {
  const { image, title, description, price, isSelected } = props;

  return (
    <div
      className="pizza-box"
      style={isSelected ? { border: "1px solid #ffb84d" } : null}
      onClick={props.onSelectPizza}
    >
      <img src={image} alt={title} />
      <div className="pizza-info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <h3>
        $ <strong>{price}</strong>
      </h3>
    </div>
  );
};

export default PizzaCard;
