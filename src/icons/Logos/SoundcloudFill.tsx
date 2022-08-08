import React from "react";
import { Icon, IconProps } from "../Icon";

export type SoundcloudFillProps = Omit<IconProps, "name">;

export const SoundcloudFill = (props: SoundcloudFillProps) => (
  <Icon name="soundcloud-fill" {...props} />
);
