import React from "react";
import { Icon, IconProps } from "../Icon";

export type EyeCloseLineProps = Omit<IconProps, "name">;

export const EyeCloseLine = (props: EyeCloseLineProps) => (
  <Icon name="eye-close-line" {...props} />
);
