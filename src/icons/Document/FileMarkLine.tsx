import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileMarkLineProps = Omit<IconProps, "name">;

export const FileMarkLine = (props: FileMarkLineProps) => (
  <Icon name="file-mark-line" {...props} />
);
