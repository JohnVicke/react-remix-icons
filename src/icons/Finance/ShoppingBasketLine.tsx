import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBasketLineProps = Omit<IconProps, "name">;

export const ShoppingBasketLine = (props: ShoppingBasketLineProps) => (
  <Icon name="shopping-basket-line" {...props} />
);
