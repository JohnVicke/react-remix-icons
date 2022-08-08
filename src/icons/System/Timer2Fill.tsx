import React from "react";
import { Icon, IconProps } from "../Icon";

export type Timer2FillProps = Omit<IconProps, "name">;

export const Timer2Fill = (props: Timer2FillProps) => (
  <Icon name="timer-2-fill" {...props} />
);
