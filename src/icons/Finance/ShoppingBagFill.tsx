import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBagFillProps = Omit<IconProps, "name">;

export const ShoppingBagFill = (props: ShoppingBagFillProps) => (
  <Icon name="shopping-bag-fill" {...props} />
);
