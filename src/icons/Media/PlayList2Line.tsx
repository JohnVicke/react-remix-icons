import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayList2LineProps = Omit<IconProps, "name">;

export const PlayList2Line = (props: PlayList2LineProps) => (
  <Icon name="play-list-2-line" {...props} />
);
