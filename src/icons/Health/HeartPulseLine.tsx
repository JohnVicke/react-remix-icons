import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeartPulseLineProps = Omit<IconProps, "name">;

export const HeartPulseLine = (props: HeartPulseLineProps) => (
  <Icon name="heart-pulse-line" {...props} />
);
