import React from "react";
import { Icon, IconProps } from "../Icon";

export type Steering2LineProps = Omit<IconProps, "name">;

export const Steering2Line = (props: Steering2LineProps) => (
  <Icon name="steering-2-line" {...props} />
);
