import React from "react";
import { Icon, IconProps } from "../Icon";

export type EyeOffFillProps = Omit<IconProps, "name">;

export const EyeOffFill = (props: EyeOffFillProps) => (
  <Icon name="eye-off-fill" {...props} />
);
