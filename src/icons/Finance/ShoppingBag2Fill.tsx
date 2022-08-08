import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBag2FillProps = Omit<IconProps, "name">;

export const ShoppingBag2Fill = (props: ShoppingBag2FillProps) => (
  <Icon name="shopping-bag-2-fill" {...props} />
);
