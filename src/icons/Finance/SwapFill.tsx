import React from "react";
import { Icon, IconProps } from "../Icon";

export type SwapFillProps = Omit<IconProps, "name">;

export const SwapFill = (props: SwapFillProps) => (
  <Icon name="swap-fill" {...props} />
);
