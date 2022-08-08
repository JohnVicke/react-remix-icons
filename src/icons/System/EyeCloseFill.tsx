import React from "react";
import { Icon, IconProps } from "../Icon";

export type EyeCloseFillProps = Omit<IconProps, "name">;

export const EyeCloseFill = (props: EyeCloseFillProps) => (
  <Icon name="eye-close-fill" {...props} />
);
