import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpeedMiniFillProps = Omit<IconProps, "name">;

export const SpeedMiniFill = (props: SpeedMiniFillProps) => (
  <Icon name="speed-mini-fill" {...props} />
);
