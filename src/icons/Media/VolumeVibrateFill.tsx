import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeVibrateFillProps = Omit<IconProps, "name">;

export const VolumeVibrateFill = (props: VolumeVibrateFillProps) => (
  <Icon name="volume-vibrate-fill" {...props} />
);
