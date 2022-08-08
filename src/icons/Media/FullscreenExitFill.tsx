import React from "react";
import { Icon, IconProps } from "../Icon";

export type FullscreenExitFillProps = Omit<IconProps, "name">;

export const FullscreenExitFill = (props: FullscreenExitFillProps) => (
  <Icon name="fullscreen-exit-fill" {...props} />
);
