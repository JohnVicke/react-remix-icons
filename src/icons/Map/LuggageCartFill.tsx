import React from "react";
import { Icon, IconProps } from "../Icon";

export type LuggageCartFillProps = Omit<IconProps, "name">;

export const LuggageCartFill = (props: LuggageCartFillProps) => (
  <Icon name="luggage-cart-fill" {...props} />
);
