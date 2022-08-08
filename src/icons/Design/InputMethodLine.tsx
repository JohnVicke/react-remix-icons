import React from "react";
import { Icon, IconProps } from "../Icon";

export type InputMethodLineProps = Omit<IconProps, "name">;

export const InputMethodLine = (props: InputMethodLineProps) => (
  <Icon name="input-method-line" {...props} />
);
