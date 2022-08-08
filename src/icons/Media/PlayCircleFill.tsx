import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayCircleFillProps = Omit<IconProps, "name">;

export const PlayCircleFill = (props: PlayCircleFillProps) => (
  <Icon name="play-circle-fill" {...props} />
);
