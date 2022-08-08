import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeDownFillProps = Omit<IconProps, "name">;

export const VolumeDownFill = (props: VolumeDownFillProps) => (
  <Icon name="volume-down-fill" {...props} />
);
