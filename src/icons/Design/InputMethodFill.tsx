import React from "react";
import { Icon, IconProps } from "../Icon";

export type InputMethodFillProps = Omit<IconProps, "name">;

export const InputMethodFill = (props: InputMethodFillProps) => (
  <Icon name="input-method-fill" {...props} />
);
