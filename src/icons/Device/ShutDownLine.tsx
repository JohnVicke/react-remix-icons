import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShutDownLineProps = Omit<IconProps, "name">;

export const ShutDownLine = (props: ShutDownLineProps) => (
  <Icon name="shut-down-line" {...props} />
);
