import React from "react";
import { Icon, IconProps } from "../Icon";

export type FullscreenFillProps = Omit<IconProps, "name">;

export const FullscreenFill = (props: FullscreenFillProps) => (
  <Icon name="fullscreen-fill" {...props} />
);
