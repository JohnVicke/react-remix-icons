import React from "react";
import { Icon, IconProps } from "../Icon";

export type BrushLineProps = Omit<IconProps, "name">;

export const BrushLine = (props: BrushLineProps) => (
  <Icon name="brush-line" {...props} />
);
