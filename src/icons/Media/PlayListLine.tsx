import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayListLineProps = Omit<IconProps, "name">;

export const PlayListLine = (props: PlayListLineProps) => (
  <Icon name="play-list-line" {...props} />
);
