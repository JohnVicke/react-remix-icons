import React from "react";
import { Icon, IconProps } from "../Icon";

export type RadioButtonFillProps = Omit<IconProps, "name">;

export const RadioButtonFill = (props: RadioButtonFillProps) => (
  <Icon name="radio-button-fill" {...props} />
);
