import React from "react";
import { Icon, IconProps } from "../Icon";

export type DragDropLineProps = Omit<IconProps, "name">;

export const DragDropLine = (props: DragDropLineProps) => (
  <Icon name="drag-drop-line" {...props} />
);
