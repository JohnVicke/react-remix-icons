import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlaystationFillProps = Omit<IconProps, "name">;

export const PlaystationFill = (props: PlaystationFillProps) => (
  <Icon name="playstation-fill" {...props} />
);
