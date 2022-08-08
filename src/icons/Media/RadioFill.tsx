import React from "react";
import { Icon, IconProps } from "../Icon";

export type RadioFillProps = Omit<IconProps, "name">;

export const RadioFill = (props: RadioFillProps) => (
  <Icon name="radio-fill" {...props} />
);
