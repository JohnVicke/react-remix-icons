import React from "react";
import { Icon, IconProps } from "../Icon";

export type PriceTagFillProps = Omit<IconProps, "name">;

export const PriceTagFill = (props: PriceTagFillProps) => (
  <Icon name="price-tag-fill" {...props} />
);
