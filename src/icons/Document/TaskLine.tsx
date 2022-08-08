import React from "react";
import { Icon, IconProps } from "../Icon";

export type TaskLineProps = Omit<IconProps, "name">;

export const TaskLine = (props: TaskLineProps) => (
  <Icon name="task-line" {...props} />
);
