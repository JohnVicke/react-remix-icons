import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileHwpLineProps = Omit<IconProps, "name">;

export const FileHwpLine = (props: FileHwpLineProps) => (
  <Icon name="file-hwp-line" {...props} />
);
