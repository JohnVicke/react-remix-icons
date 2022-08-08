import React from "react";
import { Icon, IconProps } from "../Icon";

export type VipLineProps = Omit<IconProps, "name">;

export const VipLine = (props: VipLineProps) => (
  <Icon name="vip-line" {...props} />
);
