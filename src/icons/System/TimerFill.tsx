import React from "react";
import { Icon, IconProps } from "../Icon";

export type TimerFillProps = Omit<IconProps, "name">;

export const TimerFill = (props: TimerFillProps) => (
  <Icon name="timer-fill" {...props} />
);
