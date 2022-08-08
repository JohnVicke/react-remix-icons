import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderSharedLineProps = Omit<IconProps, "name">;

export const FolderSharedLine = (props: FolderSharedLineProps) => (
  <Icon name="folder-shared-line" {...props} />
);
