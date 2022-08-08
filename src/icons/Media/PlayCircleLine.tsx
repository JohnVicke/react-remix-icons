import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayCircleLineProps = Omit<IconProps, "name">;

export const PlayCircleLine = (props: PlayCircleLineProps) => (
  <Icon name="play-circle-line" {...props} />
);
