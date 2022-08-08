import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldFlashFillProps = Omit<IconProps, "name">;

export const ShieldFlashFill = (props: ShieldFlashFillProps) => (
  <Icon name="shield-flash-fill" {...props} />
);
