import React from "react";
import { Icon, IconProps } from "../Icon";

export type Brush4FillProps = Omit<IconProps, "name">;

export const Brush4Fill = (props: Brush4FillProps) => (
  <Icon name="brush-4-fill" {...props} />
);
