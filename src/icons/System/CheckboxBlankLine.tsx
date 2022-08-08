import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxBlankLineProps = Omit<IconProps, "name">;

export const CheckboxBlankLine = (props: CheckboxBlankLineProps) => (
  <Icon name="checkbox-blank-line" {...props} />
);
