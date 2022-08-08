import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxLineProps = Omit<IconProps, "name">;

export const CheckboxLine = (props: CheckboxLineProps) => (
  <Icon name="checkbox-line" {...props} />
);
