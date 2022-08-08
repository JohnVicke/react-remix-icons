import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeUpFillProps = Omit<IconProps, "name">;

export const VolumeUpFill = (props: VolumeUpFillProps) => (
  <Icon name="volume-up-fill" {...props} />
);
