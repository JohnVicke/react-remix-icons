import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayListAddLineProps = Omit<IconProps, "name">;

export const PlayListAddLine = (props: PlayListAddLineProps) => (
  <Icon name="play-list-add-line" {...props} />
);
