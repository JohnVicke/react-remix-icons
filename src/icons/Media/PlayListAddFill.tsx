import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayListAddFillProps = Omit<IconProps, "name">;

export const PlayListAddFill = (props: PlayListAddFillProps) => (
  <Icon name="play-list-add-fill" {...props} />
);
