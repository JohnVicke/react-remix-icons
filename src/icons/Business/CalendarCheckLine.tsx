import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalendarCheckLineProps = Omit<IconProps, "name">;

export const CalendarCheckLine = (props: CalendarCheckLineProps) => (
  <Icon name="calendar-check-line" {...props} />
);
