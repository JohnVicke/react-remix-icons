import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeartPulseFillProps = Omit<IconProps, "name">;

export const HeartPulseFill = (props: HeartPulseFillProps) => (
  <Icon name="heart-pulse-fill" {...props} />
);
