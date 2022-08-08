import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldFillProps = Omit<IconProps, "name">;

export const ShieldFill = (props: ShieldFillProps) => (
  <Icon name="shield-fill" {...props} />
);
