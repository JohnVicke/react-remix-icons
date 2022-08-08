import React from "react";
import { Icon, IconProps } from "../Icon";

export type Brush4LineProps = Omit<IconProps, "name">;

export const Brush4Line = (props: Brush4LineProps) => (
  <Icon name="brush-4-line" {...props} />
);
