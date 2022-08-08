import React from "react";
import { Icon, IconProps } from "../Icon";

export type TimerFlashFillProps = Omit<IconProps, "name">;

export const TimerFlashFill = (props: TimerFlashFillProps) => (
  <Icon name="timer-flash-fill" {...props} />
);
