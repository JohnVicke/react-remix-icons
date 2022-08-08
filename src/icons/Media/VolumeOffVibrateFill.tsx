import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeOffVibrateFillProps = Omit<IconProps, "name">;

export const VolumeOffVibrateFill = (props: VolumeOffVibrateFillProps) => (
  <Icon name="volume-off-vibrate-fill" {...props} />
);
