import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileWordLineProps = Omit<IconProps, "name">;

export const FileWordLine = (props: FileWordLineProps) => (
  <Icon name="file-word-line" {...props} />
);
