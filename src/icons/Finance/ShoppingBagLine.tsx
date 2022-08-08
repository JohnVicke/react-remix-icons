import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShoppingBagLineProps = Omit<IconProps, "name">;

export const ShoppingBagLine = (props: ShoppingBagLineProps) => (
  <Icon name="shopping-bag-line" {...props} />
);
