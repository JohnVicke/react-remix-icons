import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileListFillProps = Omit<IconProps, "name">;

export const FileListFill = (props: FileListFillProps) => (
  <Icon name="file-list-fill" {...props} />
);
