import React from "react";
import { Icon, IconProps } from "../Icon";

export type EraserLineProps = Omit<IconProps, "name">;

export const EraserLine = (props: EraserLineProps) => (
  <Icon name="eraser-line" {...props} />
);
