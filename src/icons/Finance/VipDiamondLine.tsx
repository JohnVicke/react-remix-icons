import React from "react";
import { Icon, IconProps } from "../Icon";

export type VipDiamondLineProps = Omit<IconProps, "name">;

export const VipDiamondLine = (props: VipDiamondLineProps) => (
  <Icon name="vip-diamond-line" {...props} />
);
