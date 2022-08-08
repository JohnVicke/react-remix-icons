import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileDownloadFillProps = Omit<IconProps, "name">;

export const FileDownloadFill = (props: FileDownloadFillProps) => (
  <Icon name="file-download-fill" {...props} />
);
