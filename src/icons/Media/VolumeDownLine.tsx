import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeDownLineProps = Omit<IconProps, "name">;

export const VolumeDownLine = (props: VolumeDownLineProps) => (
  <Icon name="volume-down-line" {...props} />
);
