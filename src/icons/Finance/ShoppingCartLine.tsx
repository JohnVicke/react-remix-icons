import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingCartLineProps = Omit<IconProps, "name">;

export const ShoppingCartLine = (props: ShoppingCartLineProps) => (
  <Icon name="shopping-cart-line" {...props} />
);
