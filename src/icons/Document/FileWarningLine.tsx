import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileWarningLineProps = Omit<IconProps, "name">;

export const FileWarningLine = (props: FileWarningLineProps) => (
  <Icon name="file-warning-line" {...props} />
);
