import React from "react";
import { Icon, IconProps } from "../Icon";

export type FullscreenLineProps = Omit<IconProps, "name">;

export const FullscreenLine = (props: FullscreenLineProps) => (
  <Icon name="fullscreen-line" {...props} />
);
