import React from "react";
import { Icon, IconProps } from "../Icon";

export type NeteaseCloudMusicFillProps = Omit<IconProps, "name">;

export const NeteaseCloudMusicFill = (props: NeteaseCloudMusicFillProps) => (
  <Icon name="netease-cloud-music-fill" {...props} />
);
