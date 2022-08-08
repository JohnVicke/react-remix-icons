import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalendarTodoFillProps = Omit<IconProps, "name">;

export const CalendarTodoFill = (props: CalendarTodoFillProps) => (
  <Icon name="calendar-todo-fill" {...props} />
);
