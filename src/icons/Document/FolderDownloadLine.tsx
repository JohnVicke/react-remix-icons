import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderDownloadLineProps = Omit<IconProps, "name">;

export const FolderDownloadLine = (props: FolderDownloadLineProps) => (
  <Icon name="folder-download-line" {...props} />
);
