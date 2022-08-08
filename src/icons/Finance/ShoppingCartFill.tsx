import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingCartFillProps = Omit<IconProps, "name">;

export const ShoppingCartFill = (props: ShoppingCartFillProps) => (
  <Icon name="shopping-cart-fill" {...props} />
);
