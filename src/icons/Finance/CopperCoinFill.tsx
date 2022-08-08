import React from "react";
import { Icon, IconProps } from "../Icon";

export type CopperCoinFillProps = Omit<IconProps, "name">;

export const CopperCoinFill = (props: CopperCoinFillProps) => (
  <Icon name="copper-coin-fill" {...props} />
);
