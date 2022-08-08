import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileCodeLineProps = Omit<IconProps, "name">;

export const FileCodeLine = (props: FileCodeLineProps) => (
  <Icon name="file-code-line" {...props} />
);
