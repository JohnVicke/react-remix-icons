import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpeedFillProps = Omit<IconProps, "name">;

export const SpeedFill = (props: SpeedFillProps) => (
  <Icon name="speed-fill" {...props} />
);
