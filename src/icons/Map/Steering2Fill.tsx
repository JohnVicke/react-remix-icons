import React from "react";
import { Icon, IconProps } from "../Icon";

export type Steering2FillProps = Omit<IconProps, "name">;

export const Steering2Fill = (props: Steering2FillProps) => (
  <Icon name="steering-2-fill" {...props} />
);
