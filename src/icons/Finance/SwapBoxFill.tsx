import React from "react";
import { Icon, IconProps } from "../Icon";

export type SwapBoxFillProps = Omit<IconProps, "name">;

export const SwapBoxFill = (props: SwapBoxFillProps) => (
  <Icon name="swap-box-fill" {...props} />
);
