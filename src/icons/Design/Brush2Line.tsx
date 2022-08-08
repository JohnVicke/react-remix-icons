import React from "react";
import { Icon, IconProps } from "../Icon";

export type Brush2LineProps = Omit<IconProps, "name">;

export const Brush2Line = (props: Brush2LineProps) => (
  <Icon name="brush-2-line" {...props} />
);
