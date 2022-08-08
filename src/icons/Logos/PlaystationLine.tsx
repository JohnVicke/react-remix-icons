import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlaystationLineProps = Omit<IconProps, "name">;

export const PlaystationLine = (props: PlaystationLineProps) => (
  <Icon name="playstation-line" {...props} />
);
