import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalendarEventLineProps = Omit<IconProps, "name">;

export const CalendarEventLine = (props: CalendarEventLineProps) => (
  <Icon name="calendar-event-line" {...props} />
);
