import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayListFillProps = Omit<IconProps, "name">;

export const PlayListFill = (props: PlayListFillProps) => (
  <Icon name="play-list-fill" {...props} />
);
