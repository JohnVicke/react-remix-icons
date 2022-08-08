import React from "react";
import { Icon, IconProps } from "../Icon";

export type ProductHuntLineProps = Omit<IconProps, "name">;

export const ProductHuntLine = (props: ProductHuntLineProps) => (
  <Icon name="product-hunt-line" {...props} />
);
