import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayMiniLineProps = Omit<IconProps, "name">;

export const PlayMiniLine = (props: PlayMiniLineProps) => (
  <Icon name="play-mini-line" {...props} />
);
