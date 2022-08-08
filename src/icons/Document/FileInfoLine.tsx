import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileInfoLineProps = Omit<IconProps, "name">;

export const FileInfoLine = (props: FileInfoLineProps) => (
  <Icon name="file-info-line" {...props} />
);
