import React from "react";
import { Icon, IconProps } from "../Icon";

export type PriceTag3LineProps = Omit<IconProps, "name">;

export const PriceTag3Line = (props: PriceTag3LineProps) => (
  <Icon name="price-tag-3-line" {...props} />
);
