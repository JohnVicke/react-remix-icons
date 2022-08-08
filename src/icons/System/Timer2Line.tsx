import React from "react";
import { Icon, IconProps } from "../Icon";

export type Timer2LineProps = Omit<IconProps, "name">;

export const Timer2Line = (props: Timer2LineProps) => (
  <Icon name="timer-2-line" {...props} />
);
