import React from "react";
import { Icon, IconProps } from "../Icon";

export type LuggageCartLineProps = Omit<IconProps, "name">;

export const LuggageCartLine = (props: LuggageCartLineProps) => (
  <Icon name="luggage-cart-line" {...props} />
);
