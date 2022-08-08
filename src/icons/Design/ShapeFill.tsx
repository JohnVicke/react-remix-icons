import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShapeFillProps = Omit<IconProps, "name">;

export const ShapeFill = (props: ShapeFillProps) => (
  <Icon name="shape-fill" {...props} />
);
