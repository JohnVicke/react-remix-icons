import React from "react";
import { Icon, IconProps } from "../Icon";

export type VipFillProps = Omit<IconProps, "name">;

export const VipFill = (props: VipFillProps) => (
  <Icon name="vip-fill" {...props} />
);
