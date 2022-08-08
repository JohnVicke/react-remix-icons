import React from "react";
import { Icon, IconProps } from "../Icon";

export type DragMoveFillProps = Omit<IconProps, "name">;

export const DragMoveFill = (props: DragMoveFillProps) => (
  <Icon name="drag-move-fill" {...props} />
);
