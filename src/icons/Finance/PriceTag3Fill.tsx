import React from "react";
import { Icon, IconProps } from "../Icon";

export type PriceTag3FillProps = Omit<IconProps, "name">;

export const PriceTag3Fill = (props: PriceTag3FillProps) => (
  <Icon name="price-tag-3-fill" {...props} />
);
