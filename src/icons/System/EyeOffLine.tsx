import React from "react";
import { Icon, IconProps } from "../Icon";

export type EyeOffLineProps = Omit<IconProps, "name">;

export const EyeOffLine = (props: EyeOffLineProps) => (
  <Icon name="eye-off-line" {...props} />
);
