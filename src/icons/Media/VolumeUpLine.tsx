import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeUpLineProps = Omit<IconProps, "name">;

export const VolumeUpLine = (props: VolumeUpLineProps) => (
  <Icon name="volume-up-line" {...props} />
);
