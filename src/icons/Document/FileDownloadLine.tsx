import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileDownloadLineProps = Omit<IconProps, "name">;

export const FileDownloadLine = (props: FileDownloadLineProps) => (
  <Icon name="file-download-line" {...props} />
);
