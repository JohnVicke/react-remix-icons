import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingCart2LineProps = Omit<IconProps, "name">;

export const ShoppingCart2Line = (props: ShoppingCart2LineProps) => (
  <Icon name="shopping-cart-2-line" {...props} />
);
