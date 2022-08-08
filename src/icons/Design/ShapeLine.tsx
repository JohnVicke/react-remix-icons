import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShapeLineProps = Omit<IconProps, "name">;

export const ShapeLine = (props: ShapeLineProps) => (
  <Icon name="shape-line" {...props} />
);
