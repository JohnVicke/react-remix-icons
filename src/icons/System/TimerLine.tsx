import React from "react";
import { Icon, IconProps } from "../Icon";

export type TimerLineProps = Omit<IconProps, "name">;

export const TimerLine = (props: TimerLineProps) => (
  <Icon name="timer-line" {...props} />
);
