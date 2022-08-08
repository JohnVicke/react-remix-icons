import React from "react";
import { Icon, IconProps } from "../Icon";

export type FontSizeProps = Omit<IconProps, "name">;

export const FontSize = (props: FontSizeProps) => (
  <Icon name="font-size" {...props} />
);
