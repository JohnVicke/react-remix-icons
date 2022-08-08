import React from "react";
import { Icon, IconProps } from "../Icon";

export type RadioButtonLineProps = Omit<IconProps, "name">;

export const RadioButtonLine = (props: RadioButtonLineProps) => (
  <Icon name="radio-button-line" {...props} />
);
