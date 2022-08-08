import React from "react";
import { Icon, IconProps } from "../Icon";

export type CopperCoinLineProps = Omit<IconProps, "name">;

export const CopperCoinLine = (props: CopperCoinLineProps) => (
  <Icon name="copper-coin-line" {...props} />
);
