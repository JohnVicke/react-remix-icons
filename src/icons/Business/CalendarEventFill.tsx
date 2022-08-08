import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalendarEventFillProps = Omit<IconProps, "name">;

export const CalendarEventFill = (props: CalendarEventFillProps) => (
  <Icon name="calendar-event-fill" {...props} />
);
