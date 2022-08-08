import React from "react";
import { Icon, IconProps } from "../Icon";

export type NeteaseCloudMusicLineProps = Omit<IconProps, "name">;

export const NeteaseCloudMusicLine = (props: NeteaseCloudMusicLineProps) => (
  <Icon name="netease-cloud-music-line" {...props} />
);
