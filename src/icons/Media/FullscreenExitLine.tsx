import React from "react";
import { Icon, IconProps } from "../Icon";

export type FullscreenExitLineProps = Omit<IconProps, "name">;

export const FullscreenExitLine = (props: FullscreenExitLineProps) => (
  <Icon name="fullscreen-exit-line" {...props} />
);
