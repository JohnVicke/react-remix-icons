import React from "react";
import { Icon, IconProps } from "../Icon";

export type EyeLineProps = Omit<IconProps, "name">;

export const EyeLine = (props: EyeLineProps) => (
  <Icon name="eye-line" {...props} />
);
