import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalendarLineProps = Omit<IconProps, "name">;

export const CalendarLine = (props: CalendarLineProps) => (
  <Icon name="calendar-line" {...props} />
);
