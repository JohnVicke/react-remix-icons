import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldUserFillProps = Omit<IconProps, "name">;

export const ShieldUserFill = (props: ShieldUserFillProps) => (
  <Icon name="shield-user-fill" {...props} />
);
