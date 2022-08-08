import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeOffVibrateLineProps = Omit<IconProps, "name">;

export const VolumeOffVibrateLine = (props: VolumeOffVibrateLineProps) => (
  <Icon name="volume-off-vibrate-line" {...props} />
);
