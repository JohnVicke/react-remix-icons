import React from "react";
import { Icon, IconProps } from "../Icon";

export type SwapBoxLineProps = Omit<IconProps, "name">;

export const SwapBoxLine = (props: SwapBoxLineProps) => (
  <Icon name="swap-box-line" {...props} />
);
