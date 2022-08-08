import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayMiniFillProps = Omit<IconProps, "name">;

export const PlayMiniFill = (props: PlayMiniFillProps) => (
  <Icon name="play-mini-fill" {...props} />
);
