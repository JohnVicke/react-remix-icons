import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShutDownFillProps = Omit<IconProps, "name">;

export const ShutDownFill = (props: ShutDownFillProps) => (
  <Icon name="shut-down-fill" {...props} />
);
