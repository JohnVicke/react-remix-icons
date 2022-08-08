import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileShredLineProps = Omit<IconProps, "name">;

export const FileShredLine = (props: FileShredLineProps) => (
  <Icon name="file-shred-line" {...props} />
);
