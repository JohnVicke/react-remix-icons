import React from "react";
import { Icon, IconProps } from "../Icon";

export type TimeFillProps = Omit<IconProps, "name">;

export const TimeFill = (props: TimeFillProps) => (
  <Icon name="time-fill" {...props} />
);
