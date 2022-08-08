import React from "react";
import { Icon, IconProps } from "../Icon";

export type MotorbikeFillProps = Omit<IconProps, "name">;

export const MotorbikeFill = (props: MotorbikeFillProps) => (
  <Icon name="motorbike-fill" {...props} />
);
