import React from "react";
import { Icon, IconProps } from "../Icon";

export type DragMove2LineProps = Omit<IconProps, "name">;

export const DragMove2Line = (props: DragMove2LineProps) => (
  <Icon name="drag-move-2-line" {...props} />
);
