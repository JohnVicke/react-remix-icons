import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBag3FillProps = Omit<IconProps, "name">;

export const ShoppingBag3Fill = (props: ShoppingBag3FillProps) => (
  <Icon name="shopping-bag-3-fill" {...props} />
);
