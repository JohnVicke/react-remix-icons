import React from "react";
import { Icon, IconProps } from "../Icon";

export type Compass3LineProps = Omit<IconProps, "name">;

export const Compass3Line = (props: Compass3LineProps) => (
  <Icon name="compass-3-line" {...props} />
);
