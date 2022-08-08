import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxBlankFillProps = Omit<IconProps, "name">;

export const CheckboxBlankFill = (props: CheckboxBlankFillProps) => (
  <Icon name="checkbox-blank-fill" {...props} />
);
