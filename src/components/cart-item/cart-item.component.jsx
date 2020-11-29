import React from "react";

import {
  CartItemContainer,
  CartItemImg,
  ItemDetails,
  CartItemName,
} from "./cart.item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImg src={imageUrl} alt="item" />
    <ItemDetails>
      <CartItemName>{name}</CartItemName>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
