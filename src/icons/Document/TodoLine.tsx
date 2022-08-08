import React from "react";
import { Icon, IconProps } from "../Icon";

export type TodoLineProps = Omit<IconProps, "name">;

export const TodoLine = (props: TodoLineProps) => (
  <Icon name="todo-line" {...props} />
);
