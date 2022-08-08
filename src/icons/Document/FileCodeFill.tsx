import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileCodeFillProps = Omit<IconProps, "name">;

export const FileCodeFill = (props: FileCodeFillProps) => (
  <Icon name="file-code-fill" {...props} />
);
