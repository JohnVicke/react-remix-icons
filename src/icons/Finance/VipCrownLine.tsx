import React from "react";
import { Icon, IconProps } from "../Icon";

export type VipCrownLineProps = Omit<IconProps, "name">;

export const VipCrownLine = (props: VipCrownLineProps) => (
  <Icon name="vip-crown-line" {...props} />
);
