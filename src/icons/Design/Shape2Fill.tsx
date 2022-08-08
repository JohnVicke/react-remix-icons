import React from "react";
import { Icon, IconProps } from "../Icon";

export type Shape2FillProps = Omit<IconProps, "name">;

export const Shape2Fill = (props: Shape2FillProps) => (
  <Icon name="shape-2-fill" {...props} />
);
