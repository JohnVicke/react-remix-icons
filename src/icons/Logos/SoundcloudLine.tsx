import React from "react";
import { Icon, IconProps } from "../Icon";

export type SoundcloudLineProps = Omit<IconProps, "name">;

export const SoundcloudLine = (props: SoundcloudLineProps) => (
  <Icon name="soundcloud-line" {...props} />
);
