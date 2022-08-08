import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderWarningFillProps = Omit<IconProps, "name">;

export const FolderWarningFill = (props: FolderWarningFillProps) => (
  <Icon name="folder-warning-fill" {...props} />
);
