import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkipForwardMiniLineProps = Omit<IconProps, "name">;

export const SkipForwardMiniLine = (props: SkipForwardMiniLineProps) => (
  <Icon name="skip-forward-mini-line" {...props} />
);
