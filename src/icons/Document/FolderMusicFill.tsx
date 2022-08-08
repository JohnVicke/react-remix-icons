import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderMusicFillProps = Omit<IconProps, "name">;

export const FolderMusicFill = (props: FolderMusicFillProps) => (
  <Icon name="folder-music-fill" {...props} />
);
