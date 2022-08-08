import React from "react";
import { Icon, IconProps } from "../Icon";

export type TodoFillProps = Omit<IconProps, "name">;

export const TodoFill = (props: TodoFillProps) => (
  <Icon name="todo-fill" {...props} />
);
