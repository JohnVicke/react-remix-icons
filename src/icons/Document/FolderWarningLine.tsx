import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderWarningLineProps = Omit<IconProps, "name">;

export const FolderWarningLine = (props: FolderWarningLineProps) => (
  <Icon name="folder-warning-line" {...props} />
);
