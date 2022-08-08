import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileMusicLineProps = Omit<IconProps, "name">;

export const FileMusicLine = (props: FileMusicLineProps) => (
  <Icon name="file-music-line" {...props} />
);
