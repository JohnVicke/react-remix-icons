import React from "react";
import { Icon, IconProps } from "../Icon";

export type CompassesLineProps = Omit<IconProps, "name">;

export const CompassesLine = (props: CompassesLineProps) => (
  <Icon name="compasses-line" {...props} />
);
