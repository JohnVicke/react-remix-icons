import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayList2FillProps = Omit<IconProps, "name">;

export const PlayList2Fill = (props: PlayList2FillProps) => (
  <Icon name="play-list-2-fill" {...props} />
);
