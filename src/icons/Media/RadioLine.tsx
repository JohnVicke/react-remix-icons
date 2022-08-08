import React from "react";
import { Icon, IconProps } from "../Icon";

export type RadioLineProps = Omit<IconProps, "name">;

export const RadioLine = (props: RadioLineProps) => (
  <Icon name="radio-line" {...props} />
);
