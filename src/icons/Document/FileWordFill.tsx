import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileWordFillProps = Omit<IconProps, "name">;

export const FileWordFill = (props: FileWordFillProps) => (
  <Icon name="file-word-fill" {...props} />
);
