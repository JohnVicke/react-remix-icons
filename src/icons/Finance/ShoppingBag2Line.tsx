import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBag2LineProps = Omit<IconProps, "name">;

export const ShoppingBag2Line = (props: ShoppingBag2LineProps) => (
  <Icon name="shopping-bag-2-line" {...props} />
);
