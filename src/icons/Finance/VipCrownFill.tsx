import React from "react";
import { Icon, IconProps } from "../Icon";

export type VipCrownFillProps = Omit<IconProps, "name">;

export const VipCrownFill = (props: VipCrownFillProps) => (
  <Icon name="vip-crown-fill" {...props} />
);
