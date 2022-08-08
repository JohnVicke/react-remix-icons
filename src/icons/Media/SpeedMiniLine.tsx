import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpeedMiniLineProps = Omit<IconProps, "name">;

export const SpeedMiniLine = (props: SpeedMiniLineProps) => (
  <Icon name="speed-mini-line" {...props} />
);
