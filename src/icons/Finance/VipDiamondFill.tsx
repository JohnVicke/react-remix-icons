import React from "react";
import { Icon, IconProps } from "../Icon";

export type VipDiamondFillProps = Omit<IconProps, "name">;

export const VipDiamondFill = (props: VipDiamondFillProps) => (
  <Icon name="vip-diamond-fill" {...props} />
);
