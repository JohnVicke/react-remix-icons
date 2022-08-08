import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldCheckFillProps = Omit<IconProps, "name">;

export const ShieldCheckFill = (props: ShieldCheckFillProps) => (
  <Icon name="shield-check-fill" {...props} />
);
