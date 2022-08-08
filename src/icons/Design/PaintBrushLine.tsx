import React from "react";
import { Icon, IconProps } from "../Icon";

export type PaintBrushLineProps = Omit<IconProps, "name">;

export const PaintBrushLine = (props: PaintBrushLineProps) => (
  <Icon name="paint-brush-line" {...props} />
);
