import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileWarningFillProps = Omit<IconProps, "name">;

export const FileWarningFill = (props: FileWarningFillProps) => (
  <Icon name="file-warning-fill" {...props} />
);
