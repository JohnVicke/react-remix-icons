import React from "react";
import { Icon, IconProps } from "../Icon";

export type VipCrown2FillProps = Omit<IconProps, "name">;

export const VipCrown2Fill = (props: VipCrown2FillProps) => (
  <Icon name="vip-crown-2-fill" {...props} />
);
