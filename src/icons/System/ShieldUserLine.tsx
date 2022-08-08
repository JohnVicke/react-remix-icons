import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldUserLineProps = Omit<IconProps, "name">;

export const ShieldUserLine = (props: ShieldUserLineProps) => (
  <Icon name="shield-user-line" {...props} />
);
