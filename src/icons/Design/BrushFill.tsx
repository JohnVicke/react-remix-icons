import React from "react";
import { Icon, IconProps } from "../Icon";

export type BrushFillProps = Omit<IconProps, "name">;

export const BrushFill = (props: BrushFillProps) => (
  <Icon name="brush-fill" {...props} />
);
