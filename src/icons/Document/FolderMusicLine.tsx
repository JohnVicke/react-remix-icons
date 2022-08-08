import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderMusicLineProps = Omit<IconProps, "name">;

export const FolderMusicLine = (props: FolderMusicLineProps) => (
  <Icon name="folder-music-line" {...props} />
);
