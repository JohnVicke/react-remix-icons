import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingCart2FillProps = Omit<IconProps, "name">;

export const ShoppingCart2Fill = (props: ShoppingCart2FillProps) => (
  <Icon name="shopping-cart-2-fill" {...props} />
);
