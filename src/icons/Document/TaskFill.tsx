import React from "react";
import { Icon, IconProps } from "../Icon";

export type TaskFillProps = Omit<IconProps, "name">;

export const TaskFill = (props: TaskFillProps) => (
  <Icon name="task-fill" {...props} />
);
