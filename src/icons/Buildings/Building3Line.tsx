import React from "react";
import { Icon, IconProps } from "../Icon";

export type Building3LineProps = Omit<IconProps, "name">;

export const Building3Line = (props: Building3LineProps) => (
  <Icon name="building-3-line" {...props} />
);
