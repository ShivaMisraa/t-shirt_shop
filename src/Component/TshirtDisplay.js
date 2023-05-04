import React from "react";
import TshirtForm from "./TshirtForm";

const TshirtDisplay = ({ brandName, description, price, sizes, onBuy }) => {
  return (
    <div>
      <h2>{brandName}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <div>
        <span>Buy Small ({sizes.S}): </span>
        <button onClick={() => onBuy("S")}>Add to Cart</button>
      </div>
      <div>
        <span>Buy Medium ({sizes.M}): </span>
        <button onClick={() => onBuy("M")}>Add to Cart</button>
      </div>
      <div>
        <span>Buy Large ({sizes.L}): </span>
        <button onClick={() => onBuy("L")}>Add to Cart</button>
      </div>
    </div>
  );
};

export default TshirtDisplay;
