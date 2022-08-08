import React from "react";
import { Icon, IconProps } from "../Icon";

export type Brush3LineProps = Omit<IconProps, "name">;

export const Brush3Line = (props: Brush3LineProps) => (
  <Icon name="brush-3-line" {...props} />
);
