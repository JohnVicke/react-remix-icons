import React from "react";
import { Icon, IconProps } from "../Icon";

export type VipCrown2LineProps = Omit<IconProps, "name">;

export const VipCrown2Line = (props: VipCrown2LineProps) => (
  <Icon name="vip-crown-2-line" {...props} />
);
