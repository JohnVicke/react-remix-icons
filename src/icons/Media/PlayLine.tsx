import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayLineProps = Omit<IconProps, "name">;

export const PlayLine = (props: PlayLineProps) => (
  <Icon name="play-line" {...props} />
);
