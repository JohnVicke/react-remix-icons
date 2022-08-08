import React from "react";
import { Icon, IconProps } from "../Icon";

export type SwapLineProps = Omit<IconProps, "name">;

export const SwapLine = (props: SwapLineProps) => (
  <Icon name="swap-line" {...props} />
);
