import React from "react";
import { Icon, IconProps } from "../Icon";

export type DragDropFillProps = Omit<IconProps, "name">;

export const DragDropFill = (props: DragDropFillProps) => (
  <Icon name="drag-drop-fill" {...props} />
);
