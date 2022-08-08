import React from "react";
import { Icon, IconProps } from "../Icon";

export type EyeFillProps = Omit<IconProps, "name">;

export const EyeFill = (props: EyeFillProps) => (
  <Icon name="eye-fill" {...props} />
);
