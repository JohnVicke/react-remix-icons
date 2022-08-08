import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldCrossLineProps = Omit<IconProps, "name">;

export const ShieldCrossLine = (props: ShieldCrossLineProps) => (
  <Icon name="shield-cross-line" {...props} />
);
