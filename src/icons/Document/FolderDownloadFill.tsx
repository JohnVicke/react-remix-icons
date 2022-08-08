import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderDownloadFillProps = Omit<IconProps, "name">;

export const FolderDownloadFill = (props: FolderDownloadFillProps) => (
  <Icon name="folder-download-fill" {...props} />
);
