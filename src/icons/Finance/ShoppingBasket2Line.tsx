import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBasket2LineProps = Omit<IconProps, "name">;

export const ShoppingBasket2Line = (props: ShoppingBasket2LineProps) => (
  <Icon name="shopping-basket-2-line" {...props} />
);
