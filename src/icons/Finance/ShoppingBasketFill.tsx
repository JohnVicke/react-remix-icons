import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBasketFillProps = Omit<IconProps, "name">;

export const ShoppingBasketFill = (props: ShoppingBasketFillProps) => (
  <Icon name="shopping-basket-fill" {...props} />
);
