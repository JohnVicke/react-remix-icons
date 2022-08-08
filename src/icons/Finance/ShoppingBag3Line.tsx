import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBag3LineProps = Omit<IconProps, "name">;

export const ShoppingBag3Line = (props: ShoppingBag3LineProps) => (
  <Icon name="shopping-bag-3-line" {...props} />
);
