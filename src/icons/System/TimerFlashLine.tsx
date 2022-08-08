import React from "react";
import { Icon, IconProps } from "../Icon";

export type TimerFlashLineProps = Omit<IconProps, "name">;

export const TimerFlashLine = (props: TimerFlashLineProps) => (
  <Icon name="timer-flash-line" {...props} />
);
