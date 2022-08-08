import React from "react";
import { Icon, IconProps } from "../Icon";

export type CompassLineProps = Omit<IconProps, "name">;

export const CompassLine = (props: CompassLineProps) => (
  <Icon name="compass-line" {...props} />
);
