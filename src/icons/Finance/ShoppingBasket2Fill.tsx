import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBasket2FillProps = Omit<IconProps, "name">;

export const ShoppingBasket2Fill = (props: ShoppingBasket2FillProps) => (
  <Icon name="shopping-basket-2-fill" {...props} />
);
