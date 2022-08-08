import React from "react";
import { Icon, IconProps } from "../Icon";

export type PaintBrushFillProps = Omit<IconProps, "name">;

export const PaintBrushFill = (props: PaintBrushFillProps) => (
  <Icon name="paint-brush-fill" {...props} />
);
