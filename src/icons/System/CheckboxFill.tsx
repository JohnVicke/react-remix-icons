import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxFillProps = Omit<IconProps, "name">;

export const CheckboxFill = (props: CheckboxFillProps) => (
  <Icon name="checkbox-fill" {...props} />
);
