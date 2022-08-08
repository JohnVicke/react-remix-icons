import React from "react";
import { Icon, IconProps } from "../Icon";

export type CopperDiamondLineProps = Omit<IconProps, "name">;

export const CopperDiamondLine = (props: CopperDiamondLineProps) => (
  <Icon name="copper-diamond-line" {...props} />
);
