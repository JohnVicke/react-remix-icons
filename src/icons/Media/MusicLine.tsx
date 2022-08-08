import React from "react";
import { Icon, IconProps } from "../Icon";

export type MusicLineProps = Omit<IconProps, "name">;

export const MusicLine = (props: MusicLineProps) => (
  <Icon name="music-line" {...props} />
);
