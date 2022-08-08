import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalendarFillProps = Omit<IconProps, "name">;

export const CalendarFill = (props: CalendarFillProps) => (
  <Icon name="calendar-fill" {...props} />
);
