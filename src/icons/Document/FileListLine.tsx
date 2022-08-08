import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileListLineProps = Omit<IconProps, "name">;

export const FileListLine = (props: FileListLineProps) => (
  <Icon name="file-list-line" {...props} />
);
