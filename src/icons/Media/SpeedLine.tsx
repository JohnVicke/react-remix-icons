import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpeedLineProps = Omit<IconProps, "name">;

export const SpeedLine = (props: SpeedLineProps) => (
  <Icon name="speed-line" {...props} />
);
