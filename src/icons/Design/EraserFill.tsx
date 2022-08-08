import React from "react";
import { Icon, IconProps } from "../Icon";

export type EraserFillProps = Omit<IconProps, "name">;

export const EraserFill = (props: EraserFillProps) => (
  <Icon name="eraser-fill" {...props} />
);
