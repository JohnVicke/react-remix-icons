import React from "react";
import { Icon, IconProps } from "../Icon";

export type Brush3FillProps = Omit<IconProps, "name">;

export const Brush3Fill = (props: Brush3FillProps) => (
  <Icon name="brush-3-fill" {...props} />
);
