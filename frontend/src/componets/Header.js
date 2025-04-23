import React, { useContext } from "react";
import { itemContext } from "../context/ItemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { itemsInCart, totalPrice } = useContext(itemContext);
  return (
    <div className="header">
      <h1 className="gfg">Bookly Book Store </h1>
      <h3 style={{ color: "green" }}>Total Price: {totalPrice}</h3>

      <div className="cart-num">
        <div className="cart-items">{itemsInCart}</div>

        <FontAwesomeIcon icon={faCartShopping} size="4x" />
      </div>
    </div>
  );
};

export default Header;
