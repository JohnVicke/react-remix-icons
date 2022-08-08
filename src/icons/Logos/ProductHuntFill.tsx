import React from "react";
import { Icon, IconProps } from "../Icon";

export type ProductHuntFillProps = Omit<IconProps, "name">;

export const ProductHuntFill = (props: ProductHuntFillProps) => (
  <Icon name="product-hunt-fill" {...props} />
);
