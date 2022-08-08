import React from "react";
import { Icon, IconProps } from "../Icon";

export type DragMoveLineProps = Omit<IconProps, "name">;

export const DragMoveLine = (props: DragMoveLineProps) => (
  <Icon name="drag-move-line" {...props} />
);
