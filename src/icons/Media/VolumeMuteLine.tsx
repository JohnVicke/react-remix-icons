import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeMuteLineProps = Omit<IconProps, "name">;

export const VolumeMuteLine = (props: VolumeMuteLineProps) => (
  <Icon name="volume-mute-line" {...props} />
);
