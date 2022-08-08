import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeVibrateLineProps = Omit<IconProps, "name">;

export const VolumeVibrateLine = (props: VolumeVibrateLineProps) => (
  <Icon name="volume-vibrate-line" {...props} />
);
