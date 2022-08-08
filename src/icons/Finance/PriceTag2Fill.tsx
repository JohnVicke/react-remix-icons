import React from "react";
import { Icon, IconProps } from "../Icon";

export type PriceTag2FillProps = Omit<IconProps, "name">;

export const PriceTag2Fill = (props: PriceTag2FillProps) => (
  <Icon name="price-tag-2-fill" {...props} />
);
