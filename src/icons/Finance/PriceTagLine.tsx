import React from "react";
import { Icon, IconProps } from "../Icon";

export type PriceTagLineProps = Omit<IconProps, "name">;

export const PriceTagLine = (props: PriceTagLineProps) => (
  <Icon name="price-tag-line" {...props} />
);
