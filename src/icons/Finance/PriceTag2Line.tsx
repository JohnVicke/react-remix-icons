import React from "react";
import { Icon, IconProps } from "../Icon";

export type PriceTag2LineProps = Omit<IconProps, "name">;

export const PriceTag2Line = (props: PriceTag2LineProps) => (
  <Icon name="price-tag-2-line" {...props} />
);
