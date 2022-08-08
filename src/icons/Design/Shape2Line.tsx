import React from "react";
import { Icon, IconProps } from "../Icon";

export type Shape2LineProps = Omit<IconProps, "name">;

export const Shape2Line = (props: Shape2LineProps) => (
  <Icon name="shape-2-line" {...props} />
);
