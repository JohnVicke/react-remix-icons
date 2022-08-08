import React from "react";
import { Icon, IconProps } from "../Icon";

export type VolumeMuteFillProps = Omit<IconProps, "name">;

export const VolumeMuteFill = (props: VolumeMuteFillProps) => (
  <Icon name="volume-mute-fill" {...props} />
);
