import React from "react";
import { Icon, IconProps } from "../Icon";

export type CalendarTodoLineProps = Omit<IconProps, "name">;

export const CalendarTodoLine = (props: CalendarTodoLineProps) => (
  <Icon name="calendar-todo-line" {...props} />
);
