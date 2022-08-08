import React from "react";
import { Icon, IconProps } from "../Icon";

export type Brush2FillProps = Omit<IconProps, "name">;

export const Brush2Fill = (props: Brush2FillProps) => (
  <Icon name="brush-2-fill" {...props} />
);
