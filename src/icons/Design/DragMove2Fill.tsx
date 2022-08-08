import React from "react";
import { Icon, IconProps } from "../Icon";

export type DragMove2FillProps = Omit<IconProps, "name">;

export const DragMove2Fill = (props: DragMove2FillProps) => (
  <Icon name="drag-move-2-fill" {...props} />
);
