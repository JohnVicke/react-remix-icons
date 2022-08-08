import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderLockLineProps = Omit<IconProps, "name">;

export const FolderLockLine = (props: FolderLockLineProps) => (
  <Icon name="folder-lock-line" {...props} />
);
