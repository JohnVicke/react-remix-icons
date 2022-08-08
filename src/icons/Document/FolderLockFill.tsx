import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderLockFillProps = Omit<IconProps, "name">;

export const FolderLockFill = (props: FolderLockFillProps) => (
  <Icon name="folder-lock-fill" {...props} />
);
