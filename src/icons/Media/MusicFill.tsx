import React from "react";
import { Icon, IconProps } from "../Icon";

export type MusicFillProps = Omit<IconProps, "name">;

export const MusicFill = (props: MusicFillProps) => (
  <Icon name="music-fill" {...props} />
);
