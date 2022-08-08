import React from "react";
import { Icon, IconProps } from "../Icon";

export type VimeoLineProps = Omit<IconProps, "name">;

export const VimeoLine = (props: VimeoLineProps) => (
  <Icon name="vimeo-line" {...props} />
);
