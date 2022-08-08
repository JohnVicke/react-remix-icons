import React from "react";
import { Icon, IconProps } from "../Icon";

export type TextSpacingProps = Omit<IconProps, "name">;

export const TextSpacing = (props: TextSpacingProps) => (
  <Icon name="text-spacing" {...props} />
);
