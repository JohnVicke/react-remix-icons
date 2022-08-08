import React from "react";
import { Icon, IconProps } from "../Icon";

export type CompassFillProps = Omit<IconProps, "name">;

export const CompassFill = (props: CompassFillProps) => (
  <Icon name="compass-fill" {...props} />
);
