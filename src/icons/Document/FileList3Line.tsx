import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileList3LineProps = Omit<IconProps, "name">;

export const FileList3Line = (props: FileList3LineProps) => (
  <Icon name="file-list-3-line" {...props} />
);
