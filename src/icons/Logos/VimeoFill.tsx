import React from "react";
import { Icon, IconProps } from "../Icon";

export type VimeoFillProps = Omit<IconProps, "name">;

export const VimeoFill = (props: VimeoFillProps) => (
  <Icon name="vimeo-fill" {...props} />
);
