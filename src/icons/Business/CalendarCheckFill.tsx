import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalendarCheckFillProps = Omit<IconProps, "name">;

export const CalendarCheckFill = (props: CalendarCheckFillProps) => (
  <Icon name="calendar-check-fill" {...props} />
);
