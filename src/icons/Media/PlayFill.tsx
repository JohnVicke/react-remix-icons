import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlayFillProps = Omit<IconProps, "name">;

export const PlayFill = (props: PlayFillProps) => (
  <Icon name="play-fill" {...props} />
);
