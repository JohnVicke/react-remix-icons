import React from "react";
import { Icon, IconProps } from "../Icon";

export type CompassesFillProps = Omit<IconProps, "name">;

export const CompassesFill = (props: CompassesFillProps) => (
  <Icon name="compasses-fill" {...props} />
);
