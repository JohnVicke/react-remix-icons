import React from "react";
import { Icon, IconProps } from "../Icon";

export type CopperDiamondFillProps = Omit<IconProps, "name">;

export const CopperDiamondFill = (props: CopperDiamondFillProps) => (
  <Icon name="copper-diamond-fill" {...props} />
);
